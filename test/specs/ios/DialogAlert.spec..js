describe('Working with Dialog Boxes', async () => {
	it('Dialog Boxes', async () => {

		//access activity
		await driver.$('~Alert Views').click();
		await driver.$('~Okay / Cancel').click();

		//accept Alert
		//await driver.acceptAlert();

		//dismiss Alert
		//await driver.dismissAlert();

		//get alert text
		console.log(await driver.getAlertText());

		//Click on "OK" button
		await driver.$('~OK').click();

		//assertion - alert box is no longer visible
		await expect(driver.$('~Okay')).not.toExist();

	});
});
