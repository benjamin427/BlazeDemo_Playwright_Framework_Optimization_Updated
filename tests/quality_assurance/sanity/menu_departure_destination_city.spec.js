import {blazedemo_menuSelectDeparture} from '../../../environments/quality_assurance/sanity/pageObjects/menu_departure_destination_city/menu_departure_destination_city'
import {blazedemo_menuSelectDestination} from '../../../environments/quality_assurance/sanity/pageObjects/menu_departure_destination_city/menu_departure_destination_city'
import {test, expect} from '@playwright/test'
import logger from '../../../utils/logger'


test.beforeEach(async({page}) => {
    const departures = new blazedemo_menuSelectDeparture(page)
    logger.info('tests/quality_assurance/sanity/menu_departure_destination_city.spec.js: Starting test execution initialization...')
    await departures.visitWebsite()
})

test('Select Paris for departure and Buenos Aires for destination', async({page}) => {
    const departures = new blazedemo_menuSelectDeparture(page)
    const destinations = new blazedemo_menuSelectDestination(page)
    // Select departure city from the drop down menu
    await departures.menuSelectDepartureParis()
    // Select destination city from the drop down menu
    await destinations.menuSelectDestinationBuenosAires()
    // Click button to find flight information
    await destinations.clickFindFlights()
})

test('Select Philadelphia for departure and Rome for destination', async({page}) => {
    const departures = new blazedemo_menuSelectDeparture(page)
    const destinations = new blazedemo_menuSelectDestination(page)
    await departures.menuSelectDeparturePhiladelphia()
    await destinations.menuSelectDestinationRome()
    await destinations.clickFindFlights()
})

test.afterEach(async({page}, testInfo) => {
    const destinations = new blazedemo_menuSelectDestination(page)
    await destinations.closeBrowser()
    // Very the status of test results
    if (testInfo.status === 'failed') {
        logger.error(`tests/quality_assurance/sanity/menu_departure_destination_city.spec.js: Test failed at step: "${testInfo.title}"`)
    } else {
        logger.info(`tests/quality_assurance/sanity/menu_departure_destination_city.spec.js: Test completed with status: ${testInfo.status.toUpperCase()} at step: ${testInfo.title}`)
    }
    
})