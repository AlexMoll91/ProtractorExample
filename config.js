/**
 * Created by amoll on 3/15/2016.
 */
// An example configuration file

exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'https://www.wolframalpha.com/',
    framework: 'jasmine2',
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    onPrepare: function() {
        browser.driver.manage().window().maximize();
        browser.get('https://www.wolframalpha.com/');
        browser.ignoreSynchronization = true;
    },
        // better jasmine 2 reports...


    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['specs.js'],

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true // Use colors in the command line report.
    }
};