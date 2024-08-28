describe('ios search', () => {
	it('Searching', async () => {

		const searchField = await driver.$('~Search')
		await(searchField).click();
		await driver.$('~Default').click();
		//write text into the search field
		await driver.$('XCUIElementTypeSearchField').setValue("bla bla");
		//clear search field
		await driver.$('~Clear text').click();
		await driver.pause(1000);
		//Verify that the search field is empty
		//const searchText = await searchField.getText();
		await expect(searchField).not.toHaveText("value");
	});
});
