import { HomePage } from '../pages/GoogleHomePage';
import { LoginPage } from '../pages/LoginPage';
import { CONNREFUSED } from 'dns';
require('dotenv').config();

const homePage = new HomePage();
const loginPage = new LoginPage();

fixture`Login in google`
    .page('google.com')


test('first test', async t => {
    console.log(process.env.EMAIL_ADDRESS);
    await t.click(homePage.loginButton)
        .typeText(loginPage.emailTextBox, `${process.env.EMAIL_ADDRESS}`)
        .click(loginPage.nextButton)
        .typeText(loginPage.passwordTextBox, `${process.env.PASSWORD}`)
        .click(loginPage.nextButtonPassword)
        .expect(homePage.loginButton.exists).notOk();
});