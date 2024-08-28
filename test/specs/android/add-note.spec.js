
describe('test', () => {
	it('New Note Verification', async () => {

		await driver.$('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();
		await

		await driver.$('//android.widget.ImageView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/img_add"]').click();
		await driver.$('//*[@text="Text"]').click();
		await expect(driver.$('//*[@text="Editing"]')).toBeDisplayed();

		//add note title
		const noteTitle = await driver.$('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
		await noteTitle.setValue("First title");

		//add note
		const firstNote = await driver.$('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
		await firstNote.setValue("První poznámka\nDruhá\nTřetí");

		//save the changes
		await driver.back()
		await driver.back()

		//assertion
		await expect(driver.$('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();
		await expect(driver.$('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText("První poznámka\nDruhá\nTřetí");
	});
});
