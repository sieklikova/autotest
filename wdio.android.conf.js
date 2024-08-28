const path = require('path');
const { config } = require('/Users/sieklikova/Desktop/automatisatiop/webdriverio-appium/wdio.conf.js');

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
		'./test/specs/android/todo-item-screen.spec.js'
	];
	//
	// ============
	// Capabilities
	// ============
	//
	config.capabilities = [
		{
		// capabilities for local Appium web tests on Android
		  platformName: "Android",
		 'appium:deviceName': 'Pixel 5 API 33',
		 'appium:platformVersion': '13.0',
		 'appium:automationName': 'UIAutomator2',
	     'appium:app': path.join(process.cwd(), 'app_android/ApiDemos-debug.apk'),
		 'appium:app': path.join(process.cwd(), 'app_android/ColorNote+Notepad.apk'),
	     'appium:noReset': true,
		 'appium:newCommandTimeout': 240,
	     'appium:autoGrantPermissions':true
		   }
		   ];
config.services = [
	'appium',
	{
		args: {
			address: 'localhost',
			port: 4725
		},
		logPath: './'
	}]

exports.config = config;

