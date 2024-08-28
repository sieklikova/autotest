describe('Android Elements Tests', () => {
it('Find element by accessibility id', async () => {
//find element by accessibility id
const appOption = await $('~App');

// click on the element
await appOption.click();

//assertion
const actionBar = await $('~Action Bar');
await expect(actionBar).toBeExisting();
});

//find element by id

//it('Find element by Xpath', async () => {
//find element by accessibility id and click
//  await driver.$('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
it('Find element by UIAutomator', async () => {
//find element by text contains
await driver.$('android=new UiSelector().text("Alert Dialogs")').click();

// find elements by resourceID
await driver.$('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

// find elements by text
await driver.$('//android.widget.TextView[@text="Command two"]').click();

	// find elements by class - assertion
const textAssertion = await driver.$('//android.widget.TextView');
await expect(textAssertion).toHaveText("You selected: 1 , Command two");
});

it.only('Find multiple elements', async () => {
const expectedList = [
	'API Demos', "Access'ibility",
	'Accessibility', 'Animation',
	'App', 'Content',
	'Graphics', 'Media',
	'NFC', 'OS',
	'Preference', 'Text',
	'Views'
]

const actualList = []

//find multiple elements
const textList = await $$('android.widget.TextView');

//loop through them
for (const element of textList) {
	actualList.push(await element.getText());
}
//assert  the list
await expect(actualList).toEqual(expectedList);
});


});


//describe('My Login application', () => {
//   it('should login with valid credentials', async () => {
//      await LoginPage.open()

//    await LoginPage.login('tomsmith', 'SuperSecretPassword!')
//   await expect(SecurePage.flashAlert).toBeExisting()
//  await expect(SecurePage.flashAlert).toHaveTextContaining(
//     'You logged into a secure area!')
//await expect(SecurePage.flashAlert).toMatchElementSnapshot('flashAlert')
//})
//})

