//const { $ } = require('@wdio/globals')

class AddNoteScreen {
	//getter method for the "skip" button element
	get skipBtn() {
		return driver.$('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
	}

	get AddNoteText() {
		return driver.$('//android.widget.ImageView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/img_add"]');
	}

	get TextOption() {
		return driver.$('//*[@text="Text"]');
	}

	get NoteTitle() {
		return driver.$('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
	}

	get NoteContent() {
		return driver.$('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
	}

	get EditButton() {
		return driver.$('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')
	}

	get VieWNote() {
		return driver.$('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')
	}

	async saveNote() {
		await driver.back()
		await driver.back()
	}

}

//we need to export the class to be able to access the class from outside of this file
module.exports = new AddNoteScreen();
//another and newer why to do export is: export default new  AddNoteScreen()


