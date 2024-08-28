describe('ios find element', () => {
	it('Find element by accessibility id', async () => {

		await driver.$('~Alert Views').click();
		await driver.$('~Simple').click();
		await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
	});

	it('Find element by tag name', async () => {
		//single element
		console.log(await driver.$('XCUIElementTypeStaticText').getText());

		//multiple elements
		const textEls = await driver.$$('XCUIElementTypeStaticText');

		for (const element of textEls) {
			console.log(await element.getText());
		}
	});

	it('Find element by xPath', async () => {
		await driver.$('//XCUIElementTypeTable/XCUIElementTypeCell[2]/XCUIElementTypeOther[1]/XCUIElementTypeOther').click();
		await driver.$('//XCUIElementTypeStaticText[@name="Simple"]').click();
		await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
	});

	it('Find element by class chain', async () => {
		const alertText = '**/XCUIElementTypeStaticText[`name == "Alert Views"`]';
		await driver.$(`-ios class chain:${alertText}`).click();
		await driver.$('//XCUIElementTypeStaticText[@name="Simple"]').click();
		await expect(await driver.getAlertText()).toContain("A Short Title Is Best");

	});

	it.only('Find element by predicate string', async () => {
		const alertText = 'name == "Alert Views"';
		await driver.$(`-ios predicate string:${alertText}`).click();
		await driver.$('//XCUIElementTypeStaticText[@name="Simple"]').click();
		await expect(await driver.getAlertText()).toContain("A Short Title Is Best");

	});

});
