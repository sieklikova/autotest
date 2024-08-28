describe('Working with Dialog Boxes', async () => {
	it('Dialog Boxes', async () => {

		//access activity
		await driver.startActivity ("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");

		//click on the first dialog
		await driver.$('//android.widget.Button[@content-desc="OK Cancel dialog with a message"]').click();

		//accept Alert
		//await driver.acceptAlert();

		//dismiss Alert
		//await driver.dismissAlert();

		//get alert text
		console.log('AlERT TEXT -->', await driver.getAlertText);

		//Click on "OK" button
		//await driver.$('//android.widget.Button[@resource-id="android:id/button1"]').click();

		//Click on "Cancel" button
		await driver.$('//android.widget.Button[@resource-id="android:id/button2"]').click();

		//assertion - alert box is no longer visible
		await expect(driver.$('//android.widget.TextView[@resource-id="android:id/alertTitle"]')).not.toExist();

	});
});

