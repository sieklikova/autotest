const ListScreen= require('/Users/sieklikova/Desktop/automatisatiop/webdriverio-appium/test/screenobjects/ios/list.screen.js');

///Users/sieklikova/Desktop/automatisatiop/webdriverio-appium/test/screenobjects/ios/list.screen.js

describe('Todo list creating', () => {
	it('Todo list creating', async () => {

		await ListScreen.creteListBtn.click();
		await ListScreen.ListNameInput.addValue("The first note");
		await ListScreen.CreatBtn.click();

		//assertion
		await expect(ListScreen.listNameField("The first note")).toBeExisting();

		//await driver.$('~The first note').click();
		//await driver.$('~Create item').click();

		//const Title = '**/XCUIElementTypeTextField[`value == "Title"`]';
		//await driver.$(`-ios class chain:${Title}`).addValue("The first item");


		//await driver.$("//*[@value='Due']").click();

		//await driver.$('~Date Picker').click();

		//await driver.$('~Next Month').click();
		//await driver.$(`-ios class chain:${'**/XCUIElementTypeStaticText[`name == "2"`]'}`).click();
		//await driver.$('XCUIElementTypeOther').click();
		//await driver.$('~Create').click();
		//await expect(await driver.$('~The first item')).toBeExisting();
		//await expect(await driver.$('~The first item')).toBeExisting();


		await driver.pause(2000);

	});
});
