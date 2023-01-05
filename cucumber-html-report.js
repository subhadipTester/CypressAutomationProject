const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cypress/CucumberReports',
	reportPath: './cypress/CucumberReports/cucumber-htmlreport.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: '108'
        },
        device: 'Local test machine',
        platform: {
            name: 'Windows',
            version: '10'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Cypress Project'},
            {label: 'Release', value: '3.0.1'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: 'Dec 30th 2022, 08:30 PM EST'},
            {label: 'Execution End Time', value: 'Dec 30th 2017, 09:30 PM EST'}
        ]
    }
});