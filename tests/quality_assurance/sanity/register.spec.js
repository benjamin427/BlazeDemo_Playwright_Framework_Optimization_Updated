import {blazedemo_register} from '/Users/Shado/Documents/BlazeDemo_Playwright_Updated/environments/quality_assurance/smoke/pageObjects/register/register'
import {test, expect} from '@playwright/test'
import logger from '../../../utils/logger'


test('Enter and submit registration form', async({page}, testInfo) => {
    const register = new blazedemo_register(page)
    const referenceName = process.env.BLAZEDEMO_REGISTER_NAME
    const referenceCompany = process.env.BLAZEDEMO_REGISTER_COMPANY
    const referenceEmailAddress = process.env.BLAZEDEMO_REGISTER_EMAIL_ADDRESS
    const referrencePassword = process.env.BLAZEDEMO_REGISTER_PASSWORD
    const referenceURL = process.env.BLAZEDEMO_REGISTER_URL_ENDPOINT

    logger.info('Start test case initialization...')
    logger.info('Go to BlazeDemo.com/register website')
    // Navigate to the website and verify the url endpoint
    await register.visitWebsite()
    logger.info('Verifying the url endpoint...')
    await expect(page).toHaveURL(referenceURL)
    logger.info('Entering registration form...')
    // Entering information for each text field 
    await register.enterRegisterForm(referenceName, referenceCompany, referenceEmailAddress, referenceEmailAddress, referrencePassword, referrencePassword)
    logger.info('Clicking register button...')
    // Click register button
    await register.clickRegisterButton()
    
    // Verifying the status of test results
    if (testInfo.status === 'failed'){
        logger.error(`Test failed at step: "${testInfo.title}"`)
    } else {
        logger.info(`Test complete with status: ${testInfo.status.toUpperCase()} from step: ${testInfo.title}`)
    }
})
