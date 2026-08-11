import { blazedemo_reserve_flights } from '/Users/Shado/Documents/BlazeDemo_Playwright_Updated/environments/quality_assurance/sanity/pageObjects/flight_purchase_verification/flight_purchase_verification'
import { blazedemo_purchaseForm } from '/Users/Shado/Documents/BlazeDemo_Playwright_Updated/environments/quality_assurance/sanity/pageObjects/purchaseForm/purchaseForm'
import {blazedemo_menuSelectDeparture, blazedemo_menuSelectDestination } from '/Users/Shado/Documents/BlazeDemo_Playwright_Updated/environments/quality_assurance/sanity/pageObjects/menu_departure_destination_city/menu_departure_destination_city'
import {test, expect} from '@playwright/test'
import logger from '../../../../utils/logger'

test.beforeEach(async({page}) => {
    const visit = new blazedemo_menuSelectDeparture(page)
    logger.info('Start test execution initialization...')
    await visit.visitWebsite()
})

test('Select city to depart and the destination city and purchase airline service for Virgin America and fill form with special characters. Should display error prompt message.', async({page}) =>{
    const referencePurchaseURL = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_URL_ENDPOINT
    const referenceReserveURL = process.env.BLAZEDEMO_RESERVE_VIRGIN_AMERICA_URL_ENDPOINT
    const purchaseFormSpecialCharacters = process.env.BLAZEDEMO_RANDOM_CHARACTERS
    const selectMenuDeparture = new blazedemo_menuSelectDeparture(page)
    const selectMenuDestination = new blazedemo_menuSelectDestination(page)
    const purchaseReserveFlight = new blazedemo_reserve_flights(page)
    const purchaseVirginAmerica = new blazedemo_purchaseForm(page)
    
    await selectMenuDeparture.menuSelectDeparturePhiladelphia()
    await selectMenuDestination.menuSelectDestinationNewYork()
    await selectMenuDestination.clickFindFlights()
    await expect(page).toHaveURL(referenceReserveURL)
    await purchaseReserveFlight.selectAerLingus_Flight_9696()
    await expect(page).toHaveURL(referencePurchaseURL)
    await purchaseVirginAmerica.enterPurchaseForm_Name(purchaseFormSpecialCharacters)
    await purchaseVirginAmerica.enterPurchaseForm_Address(purchaseFormSpecialCharacters)
    await purchaseVirginAmerica.enterPurchaseForm_City(purchaseFormSpecialCharacters)
    await purchaseVirginAmerica.enterPurchaseForm_State(purchaseFormSpecialCharacters)
    await purchaseVirginAmerica.enterPurchaseForm_ZipCode(purchaseFormSpecialCharacters)
    await purchaseVirginAmerica.selectPurchaseForm_CardType_DinersClub()
    await purchaseVirginAmerica.enterCreditCardNumber(purchaseFormSpecialCharacters)
    await purchaseVirginAmerica.enterCreditCardMonth(purchaseFormSpecialCharacters)
    await purchaseVirginAmerica.enterCreditCardYear(purchaseFormSpecialCharacters)
    await purchaseVirginAmerica.enterCreditCardNameOnCard(purchaseFormSpecialCharacters)
    await purchaseVirginAmerica.clickRememberMeCheckbox()
})

test.afterEach(async({page}, testInfo) => {
    const close = new blazedemo_menuSelectDestination(page)
    await close.closeBrowser()
    if (testInfo.status === 'failed') {
        logger.error(`Test failed at step: "${testInfo.title}"`)
    } else {
        logger.info(`Test complete with status: ${testInfo.status.toUpperCase()} at step: ${testInfo.title}`)
    }
})

