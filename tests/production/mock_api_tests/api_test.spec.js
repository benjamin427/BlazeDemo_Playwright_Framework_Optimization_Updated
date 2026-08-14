import {test, expect} from '@playwright/test'
import logger from '../../../utils/logger'

test.beforeEach(() => {
    logger.info('tests/production/mock_api_tests/api_test.spec.js: Start test execution initialization...')
})


// This mocks all request APIs.  It is used to intercept an API response and catch the network call in order to 
// prevent all requests from reaching the actual server providing instant and controlled responses.

test('Mock API request to find the name Virgin America, flight number, and time for departure and arrival in the menu', async({page}) => {
    logger.info('tests/production/mock_api_tests/api_test.spec.js: Start mocking API requests...')

    // Use a native regular expression literal in the url to intercept a API request
    await page.route("\\*\\/\*\\/reserve.php", async (route) => {
        const json_response_airline = [{name: 'Virgin America', id: 11}]
    
    // Fulfill the request with mock data.
    await route.fulfill({status: 200, contentType: 'application/json', body: JSON.stringify(json_response_airline)})
    })

    // Use a native regular expression literal in the url to intercept a API request
    await page.route("\\*\\/\*\\/reserve.php", async (route) => {
        const json_response_flightNumber = [{name: '43', id: 12}]
    
    // Fufuill the request with mock data.
    await route.fulfill({status: 200, contentType: 'application/json', body: JSON.stringify(json_response_flightNumber)})
    })

    await page.route("\\*\\/\*\\/reserve.php", async (route) => {
        const json_response_departureTime = [{name: '1:43 AM'}]
    await route.fulfill({status: 200, contentType: 'application/json', body: JSON.stringify(json_response_departureTime)})

    })
    await page.route("\\*\\/\*\\/reserve.php", async (route) => {
        const json_response_arrivalTime = [{name: '9:45 PM'}]
    await route.fulfill({status: 200, contentType: 'application/json', body: JSON.stringify(json_response_arrivalTime)})
    })

    await page.route("\\*\\/\*\\/reserve.php", async (route) => {
        const json_response_price = [{name: '$472.56'}]
    await route.fulfill({status: 200, contentType: 'application/json', body: JSON.stringify(json_response_price)})
    })

    // Navigate to the website after mocking serveral API requests 
    await page.goto("https://blazedemo.com/reserve.php")

    logger.info('tests/production/mock_api_tests/api_test.spec.js: Start assertions...')

    // Verify information used for mock data
    await expect(page.getByText('43').first()).toBeVisible()
    await expect(page.getByText('Virgin America').first()).toBeVisible()
    await expect(page.getByText('1:43 AM')).toBeVisible()
    await expect(page.getByText('9:45 PM')).toBeVisible()
    await expect(page.getByText('$472.56')).toBeVisible()
})

test('Mock API request to find the name United Airlines, flight number, and the time for departurre and arrival in the menu', async ({page}) => {
    logger.info('tests/production/mock_api_tests/api_test.spec.js: Start mocking API test for the second test case...')

    await page.route("\\*\\/\*\\/reserve.php", async (route) => {
        const json_response_flighhtNumber = [{name: '234'}]
    await route.fulfill({status: 200, contentType: 'application/json', body: JSON.stringify(json_response_flighhtNumber)})
    })

    await page.route("\\*\\/\*\\/reserve.php", async (route) => {
        const json_response_airline = [{name: 'United Airlines'}]
    await route.fulfill({status: 200, contentType: 'application/json', body: JSON.stringify(json_response_airline)})
    })

    await page.route("\\*\\/\*\\/reserve.php", async (route) => {
        const json_response_departureTime = [{name: '7:43 AM'}]
    await route.fulfill({status: 200, contentType: 'application/json', body: JSON.stringify(json_response_departureTime)})
    })

    await page.route("\\*\\/\*\\/reserve.php", async (route) => {
        const json_response_arrivalTime = [{name: '10:45 PM'}]
    await route.fulfill({status: 200, contentType: 'application/json', body: JSON.stringify(json_response_arrivalTime)})
    })

    await page.route("\\*\\/\*\\/reserve.php", async (route) => {
        const json_response_price = [{name: '$432.98'}]
    await route.fulfill({status: 200, contentType: 'application/json', body: json_response_price})
    })

    // Navigate to the website after mocking several API requests
    await page.goto("https://blazedemo.com/reserve.php")

    logger.info('tests/production/mock_api_tests/api_test.spec.js: Start assertions...')

    // Verify information used for mocked data
    await expect(page.getByText('234').first()).toBeVisible()
    await expect(page.getByText('United Airlines')).toBeVisible()
    await expect(page.getByText('7:43 AM').first()).toBeVisible()
    await expect(page.getByText('10:45 PM').first()).toBeVisible()
    await expect(page.getByText('$432.98')).toBeVisible()
})

test('Mock API request to find the name Are Lingus, flight number, and the time for departure and arrival in the menu', async({page}) => {
    logger.info('tests/production/mock_api_tests/api_test.spec.js: Start mocking API requests for the third test case...')

    await page.route("\\*\\/\*\\/reserve.php", async (route) => {
        const json_response_flightNumber = [{name: '9696'}]
    await route.fulfill({status: 200, contentType: 'application/json', body: JSON.stringify(json_response_flightNumber)})
    })

    await page.route("\\*\\/\*\\/reserve.php", async (route) => {
        const json_response_airline = [{name: 'Aer Lingus'}]
    await route.fulfill({status: 200, contentType: 'application/json', body: JSON.stringify(json_response_airline)})
    })

    await page.route("\\*\\/\*\\/reserve.php", async (route) => {
        const json_response_departureTime = [{name: '5:27 AM'}]
    await route.fulfill({status: 200, contentType: 'application/json', body: JSON.stringify(json_response_departureTime)})
    })

    await page.route("\\*\\/\*\\/reserve.php", async (route) => {
        const json_response_arrivalTime = [{name: '8:22 PM'}]
    await route.fulfill({status: 200, contentType: 'application/json', body: JSON.stringify(json_response_arrivalTime)})
    })

    await page.route("\\*\\/\*\\/reserve.php", async (route) => {
        const json_response_price = [{name: '$200.98'}]
    await route.fulfill({status: 200, contentType: 'application/json', body: JSON.stringify(json_response_price)})
    })

    await page.goto("https://blazedemo.com/reserve.php")

    logger.info('tests/production/mock_api_tests/api_test.spec.js: Start assertions...')
    await expect(page.getByText('9696')).toBeVisible()
    await expect(page.getByText('Aer Lingus')).toBeVisible()
    await expect(page.getByText('5:27 AM')).toBeVisible()
    await expect(page.getByText('8:22 PM')).toBeVisible()
    await expect(page.getByText('$200.98')).toBeVisible()
})

// Verify the status of test results
test.afterEach(async({}, testInfo) => {
    if (testInfo.status === 'failed') {
        logger.error(`tests/production/mock_api_tests/api_test.spec.js: Test failed at step: "${testInfo.title}"`)
    } else {
        logger.info(`tests/production/mock_api_tests/api_test.spec.js: Test complete with status: ${testInfo.status.toUpperCase()} at step: ${testInfo.title}`)
    }
})