const AddNoteScreen = require('/Users/sieklikova/Desktop/automatisatiop/webdriverio-appium/test/screenobjects/android/add-note.screen.js');

describe('Add note', () => {
	before(async () => {
		// This ensures that the driver/browser is fully initialized before the test starts
		await driver.pause(1000); // Example wait to ensure everything is loaded
	});

	it(' add o note, save changes and verification', async () => {

		// Example of how to use the skip button element
		await AddNoteScreen.skipBtn.click();

		//Click on Add note
		await AddNoteScreen.AddNoteText.click();

		//Click on text
		await AddNoteScreen.TextOption.click();

		//Add note title
		await AddNoteScreen.NoteTitle.addValue("First title");

		//Add note content
		await AddNoteScreen.NoteContent.addValue("První poznámka\nDruhá\nTřetí");

		//save the changes
		await AddNoteScreen.saveNote();

		//assertion
		await expect(AddNoteScreen.EditButton).toBeDisplayed();
		await expect(AddNoteScreen.VieWNote).toHaveText("První poznámka\nDruhá\nTřetí");
	});

});
