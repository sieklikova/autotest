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

	get CreateItem() {
		return driver.$('~Create item');
	}

	listNameField(name) {
		return driver.$(`-ios predicate string:${'name == "The first note"'}`);
	}
}

module.exports = new ListScreen();



