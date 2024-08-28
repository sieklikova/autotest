const ListScreen= require('/Users/sieklikova/Desktop/automatisatiop/webdriverio-appium/test/screenobjects/ios/item.screen.js');

///Users/sieklikova/Desktop/automatisatiop/webdriverio-appium/test/screenobjects/ios/list.screen.js

describe('Todo list creating', () => {

		before(async () => {
			await ListScreen.creteListBtn.click();
			await ListScreen.ListNameInput.addValue("The first note");
			await ListScreen.CreatBtn.click();

			//assertion
			await expect(ListScreen.listNameField("The first note")).toBeExisting();
			await ListScreen.listNameField("The first note").click();
		});

		it('Create Item', async () => {
			await ListScreen.CreateItem.click();
			//const Title = ListScreen.ItemTitle;
			await ListScreen.ItemTitle.addValue("The first item");
			await ListScreen.ItemDue.click();
			await ListScreen.DataPicker.click();
			await ListScreen.NextMonth.click();
			//await ListScreen.SelectDay.click();
			await ListScreen.getByAccessibility.SelectDay.click();
			await ListScreen.ClickEmptySpace.click();
			await ListScreen.CreatItemButton.click();

			//const Title = '**/XCUIElementTypeTextField[`value == "Title"`]';
			//await driver.$(`-ios class chain:${Title}`).addValue("The first item");


			//assertion
			await expect(await driver.$('~The first item')).toBeExisting();
			await expect(await ListScreen.getByAccessibility(ListScreen.SelectDay)).toBeExisting();
		});

	it('Edit todo item', async () => {

	});

	});
