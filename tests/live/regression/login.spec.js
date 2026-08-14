import {blazedemo_Login} from '../../../environments/live/regression/pageObjects/login/login'
import {test, expect} from '@playwright/test'
import logger from '../../../utils/logger'

test('Go to login website and enter login credentials', async({page}, testInfo) => {
    const login = new blazedemo_Login(page)
    const referenceEmailAddress = process.env.BLAZEDEMO_LOGIN_EMAIL_ADDRESS
    const referencePassword = process.env.BLAZEDEMO_LOGIN_PASSWORD
    const referenceURL = process.env.BLAZEDEMO_LOGIN_URL_ENDPOINT
    logger.info('tests/live/regression/login.spec.js: Starting test execution initialization...')
    // Navigate to the website and verify the url endpoint
    await login.visitWebsite()
    await expect(page).toHaveURL(referenceURL)
    // Entering login credentials 
    await login.enterLoginCredentials(referenceEmailAddress, referencePassword)
    await login.clickLoginButton()
    // Verify the status of test results
    if (testInfo.status === 'failed'){
        logger.error(`tests/live/regression/login.spec.js: Test has failed at step: "${testInfo.title}"`)
    } else {
        logger.info(`tests/live/regression/login.spec.js: Test is complete with status: ${testInfo.status.toUpperCase()} at step: ${testInfo.title}`)
    }
    await login.closeBrowser()
})