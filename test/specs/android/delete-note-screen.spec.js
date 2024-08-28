const AddNoteScreen = require('/Users/sieklikova/Desktop/automatisatiop/webdriverio-appium/test/screenobjects/android/add-note.screen.js');
const DeleteNoteScreen = require('/Users/sieklikova/Desktop/automatisatiop/webdriverio-appium/test/screenobjects/android/delete-note.screen.js');

describe('Add note', () => {
	before(async () => {

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

	beforeEach(() => {
		console.log('BEFORE EACH HOOK!!')
	});

	after(() => {
		console.log('AFTER HOOK!!')
	});

	afterEach(() => {
		console.log('AFTER EACH HOOK!!')
	})


		it('delete note and verification', async () => {

			const note = await AddNoteScreen.NoteTitle.getText();
		await DeleteNoteScreen.moreIcon.click();
		await DeleteNoteScreen.DeleteIcon.click();
		await DeleteNoteScreen.OKButton.click();
		await DeleteNoteScreen.Menu.click();
		await DeleteNoteScreen.TrashIcon.click();
		await expect(DeleteNoteScreen.DeletedNoteTitle).toHaveText(note);

	});

});
