const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  require('cypress-mochawesome-reporter/plugin')(on);
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  projectId: 'r72cia',
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter,cypress-junit-reporter',
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junit/mochajunitresults-[hash].xml',
      properties: {
        BUILD_ID: 410
    },
    testsuitesTitle: true,
    suiteTitleSeparatedBy: '.',
    useFullSuiteTitle: true,
    toConsole: false,
    testCaseSwitchClassnameAndName: true
    },
    cypressJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junit/cypressjunitresults-[hash].xml',
      properties: {
        BUILD_ID: 409
    },
    testsuitesTitle: true,
    suiteTitleSeparatedBy: '.',
    useFullSuiteTitle: true,
    toConsole: false,
    testCaseSwitchClassnameAndName: true
    },
    cypressMochawesomeReporterReporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress MochaAwesome TestReport',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    code: true,
    overwrite: true
    },
  },
  defaultCommandTimeout: 8000,
  env: {

    url: "https://rahulshettyacademy.com"
  },
  retries: {
    runMode: 1,
    },
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/integration/examples/*.js',
    videoUploadOnPasses: false,
    experimentalStudio: true,
    
  },
});
