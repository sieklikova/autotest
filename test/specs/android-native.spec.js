describe('Android Native Feature Tests',  () => {
	it('Access an Activity directly', async () => {
		//aaccess activity
		await driver.startActivity ("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");

		//pause 3s
		await driver.pause(3000);

		//assertion
		await expect(driver.$('//*[@text="App/Alert Dialogs"]')).toExist();

	})
});

/*
describe('Android text field Views ', () => {
    it('View element exist on Action Bar', async () => {
        //find element by accessibility id
        await $('~Views').click();
        await $('~Auto Complete').click();
        await driver.$('//android.widget.TextView[@content-desc="1. Screen Top"]').click();
        const countryName =  await driver.$('//android.widget.AutoCompleteTextView[@resource-id="io.appium.android.apis:id/edit"]');
        await countryName.addValue('American');
        await expect(countryName).toHaveText("American");

    });
});
 */
