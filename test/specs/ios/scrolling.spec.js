describe('IOS scrolling', () => {
	it('Working with Scrollable elements', async () => {

		//easiest
		//await driver.execute('mobile: scroll', {direction: "down"});
		//await driver.execute('mobile: scroll', {direction: "up"});

		//complex
		await driver.$('~Picker View').click();

		const redPicker = await driver.$('~Red color component value');
		await driver.execute('mobile: scroll', {element: redPicker.elementId, direction: "down"});

		//await driver.pause(2000);

		const greenPicker = await driver.$('~Green color component value');
		await driver.execute('mobile: scroll', {element: greenPicker.elementId, direction: "down"});

		//await driver.pause(2000);

		const bluePicker = await driver.$('~Blue color component value');
		await driver.execute('mobile: scroll', {element: bluePicker.elementId, direction: "down"});

		await driver.pause(2000);

		//set purple color (125, 0, 125)

		await redPicker.addValue('125');
		await greenPicker.addValue('0');
		await bluePicker.addValue('125');

		await driver.pause(2000);

	});

});
