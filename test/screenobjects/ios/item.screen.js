class ListScreen {
	get creteListBtn() {
		return driver.$('//XCUIElementTypeStaticText[@name="Create list"]');
	}

	get ListNameInput() {
		return driver.$('XCUIElementTypeTextField');
	}

	get CreatBtn() {
		return driver.$('~Create');
	}

	get CreateNote() {
		return driver.$ ('~The first note');
	}

	listNameField(name) {
		return driver.$(`-ios predicate string:${'name == "The first note"'}`);
	}

	get CreateItem() {
		return driver.$('~Create item');
	}

	get ItemTitle() {
		return driver.$('//XCUIElementTypeTextField[@value="Title"]');
	}

	get ItemDue() {
		return driver.$("//*[@value='Due']");
	}

	get DataPicker() {
		return driver.$("//XCUIElementTypeButton[@name=\"Date Picker\"]");
	}

	get NextMonth() {
		return driver.$('~Next Month');
	}

	get SelectDay() {
		return driver.$(`-ios class chain:${'**/XCUIElementTypeStaticText[`name == "2"`]'}`)
	}

	get ClickEmptySpace() {
		return driver.$('XCUIElementTypeOther');
	}

	get CreatItemButton() {
		return driver.$('~Create');
	}

	getByAccessibility(name) {
		return driver.$(`~${name}`);
	}

}

module.exports = new ListScreen();
