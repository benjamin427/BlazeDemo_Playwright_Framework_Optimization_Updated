import { blazedemo_reserve_flights } from '../../../environments/quality_assurance/regression/pageObjects/flight_purchase_verification/flight_purchase_verification'
import { blazedemo_purchaseForm } from '../../../environments/quality_assurance/regression/pageObjects/purchaseForm/purchaseForm'
import {blazedemo_menuSelectDeparture, blazedemo_menuSelectDestination } from '../../../environments/quality_assurance/regression/pageObjects/menu_departure_destination_city/menu_departure_destination_city'
import {test, expect} from '@playwright/test'
import logger from '../../../utils/logger'

test.beforeEach(async({page}) => {
    const visit = new blazedemo_menuSelectDeparture(page)
    logger.info('tests/quality_assurance/regression/formPurchaseFlights.spec.js: Start test execution initialization...')
    await visit.visitWebsite()
})

test('Select city to depart and the destination city and purchase airline service for Virgin America and fill form to purchase flight ticket', async({page}) =>{
    const referencePurchaseURL = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_URL_ENDPOINT
    const referenceReserveURL = process.env.BLAZEDEMO_RESERVE_VIRGIN_AMERICA_URL_ENDPOINT
    const referenceReserveName = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_NAME
    const referenceReserveAddress = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ADDRESS
    const referenceReserveCity = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_CITY
    const referenceReserveState = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_STATE
    const referenceReserveZipcode = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ZIPCODE
    const referenceReserveCreditCardMonth = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_CREDITCARD_MONTH
    const referenceReserveCreditCardNumber = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_CREDITCARD_NUMBER
    const referenceReserveCreditCardYear = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_CREDITCARD_YEAR
    const referenceReserveCreditCardNameOnCard = process.env.BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_CREDITCARD_NAME_ON_CARD
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
    await purchaseVirginAmerica.enterPurchaseForm_Name(referenceReserveName)
    await purchaseVirginAmerica.enterPurchaseForm_Address(referenceReserveAddress)
    await purchaseVirginAmerica.enterPurchaseForm_City(referenceReserveCity)
    await purchaseVirginAmerica.enterPurchaseForm_State(referenceReserveState)
    await purchaseVirginAmerica.enterPurchaseForm_ZipCode(referenceReserveZipcode)
    await purchaseVirginAmerica.selectPurchaseForm_CardType_Visa()
    await purchaseVirginAmerica.enterPurchaseForm_CreditCardMonth(referenceReserveCreditCardMonth)
    await purchaseVirginAmerica.enterPurchaseForm_CreditCardNumber(referenceReserveCreditCardNumber)
    await purchaseVirginAmerica.enterPurchaseForm_CreditCardYear(referenceReserveCreditCardYear)
    await purchaseVirginAmerica.enterPurchaseForm_NameOnCard(referenceReserveCreditCardNameOnCard)
    await purchaseVirginAmerica.clickPurchaseFlight()
})

test.afterEach(async({page}, testInfo) => {
    const close = new blazedemo_purchaseForm(page)
    if (testInfo.status === 'failed') {
        logger.error(`tests/quality_assurance/regression/formPurchaseFlights.spec.js: Test failed at step: "${testInfo.title}"`)
    } else {
        logger.info(`tests/quality_assurance/regression/formPurchaseFlights.spec.js: Test complete with status: ${testInfo.status.toUpperCase()} at step: ${testInfo.title}`)
    }
    await close.closeBrowser()
})

