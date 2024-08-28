describe('Todo list creating', () => {
	it('Todo list creating', async () => {

		await driver.$('~Create list').click();
		await driver.$('XCUIElementTypeTextField').addValue("The first note");
		await driver.$('~Create').click();
		await expect(await driver.$('~The first note')).toBeExisting();
		await driver.$('~The first note').click();

		//create item
		await driver.$('~Create item').click();

		const Title = '**/XCUIElementTypeTextField[`value == "Title"`]';
		await driver.$(`-ios class chain:${Title}`).addValue("The first item");


		await driver.$("//*[@value='Due']").click();

		await driver.$('~Date Picker').click();

		//await driver.$('~Next Month').click();
		await driver.$(`-ios class chain:${'**/XCUIElementTypeStaticText[`name == "2"`]'}`).click();
		await driver.$('XCUIElementTypeOther').click();
		await driver.$('~Create').click();
		await expect(await driver.$('~The first item')).toBeExisting();
		//await expect(await driver.$('~The first item')).toBeExisting();


		await driver.pause(2000);

	});
});
