import {blazedemo_Login} from '../../../../environments/production/sanity/pageObjects/login/login'
import {test, expect} from '@playwright/test'
import logger from '../../../../utils/logger'

test.beforeEach(async({page}) => {
    const login = new blazedemo_Login(page)
    const referenceURL = process.env.BLAZEDEMO_LOGIN_URL_ENDPOINT
    logger.info('Start test execution initialization...')
    await login.visitWebsite()
    await expect(page).toHaveURL(referenceURL)
})

test('Enter random text into textfield for email address and password field. Should displlay an error prompt message', async({page}) => {
    const login = new blazedemo_Login(page)
    const referenceSpecialCharacters_EMail = process.env.BLAZEDEMO_LOGIN_EMAIL_ADDRESS_RANDOM_CHARACTERS
    const referenceSpecialCharacters_Password = process.env.BLAZEDEMO_LOGIN_PASSWORD_RANDOM_CHARACTERS
    await login.enterLoginCredentials(referenceSpecialCharacters_EMail, referenceSpecialCharacters_Password)
    await login.clickLoginButton()

})

test.afterEach(async({page}, testInfo) => {
    const login = new blazedemo_Login(page)
    if (testInfo.status === 'failed'){
        logger.error(`Test failed at step: "${testInfo.title}"`)
    } else {
        logger.info(`Test complete with status: ${testInfo.status.toUpperCase()} at step: ${testInfo.title}`)
    }
    await login.closeBrowser()
})
