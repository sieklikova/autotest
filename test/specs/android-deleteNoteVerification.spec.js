describe('Android Delete note', () => {
	it('Deleting Note', async () => {

		await driver.$('//android.widget.Button[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();


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

		//How to delete note
		const note = await driver.$('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').getText();

		// click on more icon
		await driver.$('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/menu_btn"]').click();
		//click on delete icon
		await driver.$('//*[@text="Delete"]').click();
		//Click on "OK" button
		await driver.$('//android.widget.Button[@resource-id="android:id/button1"]').click();
		//Click on menu
		await driver.$('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();
		//Click on trash
		await driver.$('//*[@text="Trash Can"]').click();

		// assertion deteted note is in the trash
		await expect(driver.$('//*[@text="First title"]')).toHaveText(note);


		await driver.pause(3000);
	});

});



