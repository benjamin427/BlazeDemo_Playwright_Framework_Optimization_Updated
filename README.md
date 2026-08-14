** Work in progress **


Installation:


Go to nodejs website to download the current version of nodejs to use Playwright and follow the installation steps. To verify that nodejs has been installed, go to your terminal and type the command "node --version" and also type the node package command "npm --version"

Project setup:

Make a directory folder from your terminal, and once you're inside the directory you've created, type "npm install playwright@latest" to start creating your project.

Next you're going to initialize Playwright by typing "npm init playwright" to start the process of creating your project. Then follow the prompts to select the language (select JavaScript); 

type 'test' for where you want the end-to-end tests, type 'y' to add a github actions workflow in the project, and type 'y' to let playwright install browsers automatically.

Once you've completed your project setup, type "npx playwright test" so it will execute the test suite. If you have a VSCode alleady installed in your machine, type "code" and it will automatically launch the VSCode window.

Required tools for the framework:

After you complete the installation and project setup, you will need these tools to support the test execution process; dotenv for the configuration file to use environment variables, and Winston to install a logger configuration file.

Setting up script commands:

In order to create custom script commands, you will need to go to the project.json file.

Under the "script" section is where you can create the commands that you will use on your terminal. All of the commands are available for you to select which browser to use for test execution. To select a browser in Playwright, type the command "npm run chrome:test-suite:quality-assurance" to run the test execution of the entire quality assurance test suite using the chrome browser (do the same approach with other staging environments for production and live environments). You can select the firefox browser option to do the same script format (npm run firefox:test-suite:quality-assurance) 

Also, you have an option to execute a test suite based on the type of testing procedure you're working on. For smoke test using the chrome browser in the QA environment type npm run chrome:test:quality-assurance:smoke. Do the same for sanity and regression testing (npm run chrome:test:quality-assurance:sanity, npm run chrome:test:quality-assurance:regression). Follow the similar script format if you're testing a suite for other staging environments for production and live using chrome and firefox browsers.  

Generating reports:

After running a test execution and the CI/CD pipeline has completed a build, there will be a report that is from a generated artifact which is a zip file that will contain the report document. There will be an option under the "artifact" section where you can download the zip file that contains the complete report document.

Testing methodologies:

In this framework, I've designed it to focus heavily on edge case testing and positive and negative based tests. I provided complete test coverage of the pages that were suitable for test automation.

I also include a sharding matrix which has the capability to do test executions in reduced time and create faster CI/CD cycles while maintaining horizontal scalability.

Challenges and solutions:

In certain situations when designing and executing this framework, I've experienced timimg issues with certain functions that were used for automating user input, and the browsers closed before any attemnpt for the functions to execute inputing text in every field on each form. The solution I've found was to include more "awaits" on all test files so the closing of the browser doesn't interfere with targeting the element to perforn automating user input.

Tech stack:

The tech stack I've used were Dotenv, NodeJS, VSCode, Playwright, Chrome, Firefox, WebKit, Git, GitHub, GitHub Actions, Windows 11, and JavaScript.

The purpose of this project:

The reason I chosed BlazeDemo.com as the website to use for test automation was due to the fact that it was a safe platform that doesn't influence real world test data that could cause potential safety issues and concerns.
