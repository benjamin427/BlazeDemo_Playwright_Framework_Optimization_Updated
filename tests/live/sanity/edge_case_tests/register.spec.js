import {blazedemo_register} from '../../../../environments/live/sanity/pageObjects/register/register'
import {test, expect} from '@playwright/test'
import logger from '../../../../utils/logger'

test.beforeEach(async({page}) => {
    const start = new blazedemo_register(page)
    const referenceURL = process.env.BLAZEDEMO_REGISTER_URL_ENDPOINT
    logger.info('Start test execution initialization...')
    await start.visitWebsite()
    await expect(page).toHaveURL(referenceURL)
})

test('Submit registration form with special characters. Should display an error prompt message.', async({page}) => {
    const register = new blazedemo_register(page)
    const referenceSpecialCharacters_nameField = process.env.BLAZEDEMO_REGISTER_NAME_RANDOM_TEXT
    const referenceSpecialCharacters_companyField = process.env.BLAZEDEMO_REGISTER_COMPANY_RANDOM_TEXT
    const referenceSpecialCharacters_emailField = process.env.BLAZEDEMO_REGISTER_EMAIL_ADDRESS_RANDOM_TEXT
    const referenceSpecialCharacters_passwordField = process.env.BLAZEDEMO_REGISTER_PASSWORD_RANDOM_TEXT
    const referenceSpecialCharacters_passwordConfirmField = process.env.BLAZEDEMO_REGISTER_PASSWORD_CONFIRM_RANDOM_TEXT
    await register.enterRegisterForm(referenceSpecialCharacters_nameField, 
        referenceSpecialCharacters_companyField, referenceSpecialCharacters_emailField, 
        referenceSpecialCharacters_passwordField, referenceSpecialCharacters_passwordConfirmField)
    await register.clickRegisterButton()
})


test.afterEach(async({page}, testInfo) => {
    const register = new blazedemo_register(page)
    await register.closeBrowser()
    if (testInfo.status === 'failed'){
        logger.error(`Test failed at step: "${testInfo.title}"`)
    } else {
       logger.info(`Test complete with status: ${testInfo.status.toUpperCase()} at step: ${testInfo.title}`)
    }
    
})
