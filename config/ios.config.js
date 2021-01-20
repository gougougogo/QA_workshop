const {config} = require('./wdio.config');

config.capabilities = [
    {
       platformName: 'iOS',
       deviceName: 'iPhone 11',
       platformVersion: '14.3',
       automationName: 'XCUITest',
       app: '/Users/siyu.gou/Documents/workshop/QA_workshop/app/iOS-Simulator-NativeDemoApp-0.2.1.app',
    }
];
exports.config = config;