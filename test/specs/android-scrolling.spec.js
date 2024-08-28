describe('Android scrolling', () => {

	/*it('Vertical scrolling', async () => {
		await $('~App').click();
		await $('~Activity').click();


		//scroll to the end (not stable if the element get moved)
		//await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
		// EXPLANATION:
		// Selector Syntax: The $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)') command is an Android-specific UI Automator selector that tells the system to scroll to the end of a scrollable element.
		//
		// Parameters:
		// 1: The number of times to perform the swipe action.
		// 5: The number of swipes to perform to reach the end. If not specified, it defaults to 5.
		// Await: Since WebdriverIO commands are asynchronous, you must use await to ensure the command completes before proceeding.

		//scrollTextIntoView - more stable
		await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

		//await $('~Secure Surfaces').click();

		//Assertion
		await expect($('~Secure Dialog')).toExist();
	})
	it('Horizontal scrolling', async () => {
		await driver.startActivity ("io.appium.android.apis", "io.appium.android.apis.view.Gallery1");

		// Horizontal scrolling
		//await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
		await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');

		await driver.pause(3000);
	})  */
	it ('Change date in Dialog', async () => {

		// access the date picker
		await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.DateWidgets1");

		//get current date
		const date = await driver.$('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
		const currentDate = await date.getText();
		console.log(currentDate);

		await $('~change the date').click();
		await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

		//select date
		await driver.$('//android.view.View[@content-desc="10 August 2024"]').click();

		//Click on "OK" button
		await driver.$('//android.widget.Button[@resource-id="android:id/button1"]').click();

		//assertion verify to update date
		await expect(await date.getText()).not.toEqual(currentDate);

		await driver.pause(3000);

	})

})
