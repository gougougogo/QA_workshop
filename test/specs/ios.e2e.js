const LoginPage = require('../pageobjects/login.page');
const Page = require('../pageobjects/base.page');

describe('ios demo', () => {
    it('ios case', () => {
        LoginPage.login();
    });
});