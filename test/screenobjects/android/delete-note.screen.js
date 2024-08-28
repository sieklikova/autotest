//const { $ } = require('@wdio/globals')

class DeleteNoteScreen {
	//getter method for the "skip" button element
	get moreIcon() {
		return driver.$('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/menu_btn"]');
	}

	get DeleteIcon() {
		return driver.$('//*[@text="Delete"]');
	}

	get OKButton () {
		return driver.$('//android.widget.Button[@resource-id="android:id/button1"]');
	}

	get Menu() {
		return driver.$('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
	}

	get TrashIcon() {
		return driver.$('//*[@text="Trash Can"]');
	}

	get DeletedNoteTitle() {
		return driver.$('//*[@text="First title"]');
	}


}

//we need to export the class to be able to access the class from outside of this file
	module.exports = new DeleteNoteScreen();
//another and newer why to do export is: export default new  AddNoteScreen()


