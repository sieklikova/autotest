const path = require('path');
const { config } = require ('/Users/sieklikova/Desktop/automatisatiop/webdriverio-appium/wdio.conf.js');

//exports.config = {
// ==================
// Runner configuration
// ==================

config.runner = 'local';
config.port = 4723;
//
// ==================
// Specify Test Files
// ==================
config.specs = [
	'./test/specs/ios/todo-item-screen.spec.js'
];
//
// ============
// Capabilities
// ============
//
config.capabilities = [
	{
		// capabilities for local Appium web tests on IOS
		platformName: "iOS",
		'appium:deviceName': 'iPhone 15 Pro',
		'appium:platformVersion': '17.5',
		'appium:automationName': 'XCUITest',
		//'appium:app': path.join(process.cwd(), "./app_ios/UIKitCatalog.app"),
		'appium:app': path.join (process.cwd (), "./app_ios/MVCTodo.app"),
		'appium:noReset': true,
		'appium:newCommandTimeout': 120000,
		'appium:autoGrantPermissions': true
	}

];
// ===================
// Test Configurationsy
// ===================
// Define all options that are relevant for the WebdriverIO instance here
//
// Level of logging verbosity: trace | debug | info | warn | error | silent


services = [
	'appium',
	{
		args: {
			address: 'localhost',
			port: 4724
		},
		logPath: './'
	}]

exports.config = config;

