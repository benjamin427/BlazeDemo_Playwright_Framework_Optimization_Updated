import {blazedemo_menuSelectDeparture} from '../../../environments/quality_assurance/regression/pageObjects/menu_departure_destination_city/menu_departure_destination_city'
import {blazedemo_menuSelectDestination} from '../../../environments/quality_assurance/regression/pageObjects/menu_departure_destination_city/menu_departure_destination_city'
import {blazedemo_reserve_flights} from '../../../environments/quality_assurance/regression/pageObjects/flight_purchase_verification/flight_purchase_verification'
import {test, expect} from '@playwright/test'
import logger from '../../../utils/logger'

test.beforeEach(async({page}) => {
    const departure = new blazedemo_menuSelectDeparture(page)
    logger.info('tests/quality_assurance/regression/flight_purchase_verification.spec.js: Start test execution initialization...')
    await departure.visitWebsite()
})

test("Select city for departure and for destination to get flight information", async({page}) => {
    const departure_1 = new blazedemo_menuSelectDeparture(page)
    const destination_1 = new blazedemo_menuSelectDestination(page)
    const reserve_flights = new blazedemo_reserve_flights(page)
    const referenceReserveURL = process.env.BLAZEDEMO_RESERVE_VIRGIN_AMERICA_URL_ENDPOINT
    const referenceURL = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_URL_ENDPOINT
    // Select departure city from drop down menu
    await departure_1.menuSelectDeparturePhiladelphia()
    // Select destinatuon city from drop down menu
    await destination_1.menuSelectDestinationNewYork()
    // Click button to find flights
    await destination_1.clickFindFlights()
    // Verify the url endpoint after clicking the button to navigate to the next page
    await expect(page).toHaveURL(referenceReserveURL)
    // Select airline service to purchase flight ticket
    await reserve_flights.selectVirginAmerica_Flight_43()
})

test("Select city for departure and destination to make a purchase for United Airlines", async({page}) => {
    const departure_2 = new blazedemo_menuSelectDeparture(page)
    const destination_2 = new blazedemo_menuSelectDestination(page)
    const reserve_flights = new blazedemo_reserve_flights(page)
    const referenceReserveURL = process.env.BLAZEDEMO_RESERVE_UNITED_AIRLINES_URL_ENDPOINT
    const referenceURL = process.env.BLAZEDEMO_PURCHASE_UNITED_AIRLINES_URL_ENDPOINT
    await departure_2.menuSelectDepartureSanDiego()
    await destination_2.menuSelectDestinationCairo()
    await destination_2.clickFindFlights()
    await expect(page).toHaveURL(referenceReserveURL)
    await reserve_flights.selectAerLingus_Flight_9696()
    await expect(page).toHaveURL(referenceURL)
})

test.afterEach(async({page}, testInfo) => {
    const destination_3 = new blazedemo_menuSelectDestination(page)
    // Verify the status of test results
    if (testInfo.status === 'failed') {
        logger.error(`tests/quality_assurance/regression/flight_purchase_verification.spec.js: Test failed at step: "${testInfo.title}"`)
    } else {
        logger.info(`tests/quality_assurance/regression/flight_purchase_verification.spec.js: Test complete with status: ${testInfo.status.toUpperCase()} at step: ${testInfo.title}`)
    }
    await destination_3.closeBrowser()
})

