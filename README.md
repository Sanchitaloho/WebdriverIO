# WebdriverIO_Part1
Using webdriver IO and visual studio code

from commandline you can execute:
npm test -- --spec ./test/popup.js

create test suites folder and change in config file and  package.io
npm run --suite testSuites

To display and genearte alure reports: options available are:

1. config in package.json
"scripts": {
    "report-open": "allure open allure-report",
    "report-generate": "allure generate --clean allure-results",
    "report-generate-open": "allure generate --clean allure-results && allure open allure-report",
    "pretest": "rimraf allure-results && rimraf allure-report && rimraf test-screenshots && rimraf wdio-logs",
    "pretestSuites": "rimraf allure-results && rimraf allure-report && rimraf test-screenshots && rimraf wdio-logs",
    "test": "node_modules/.bin/wdio ./wdio.conf.js",
    "testSuites": "./node_modules/.bin/wdio ./wdio.conf.js --suite testSuites",
    "RegressionSuites": "./node_modules/.bin/wdio ./wdio.conf.js --suite RegressionSuites"
  },
2. >> allure generate allure-results --clean -o allure-report && allure open allure-report
or
allure generate allure-results/ --clean && allure open -p 8000
