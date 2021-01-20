const Page = require('./base.page');
const expectChai = require('chai').expect;

class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get goToLogin () { return $('//XCUIElementTypeOther[@name="Login"]') };
    get email () { return $('//XCUIElementTypeTextField[@name="input-email"]') };
    get password () { return $('//XCUIElementTypeSecureTextField[@name="input-password"]') };
    get submit () { return $('///XCUIElementTypeOther[@name="LOGIN"]') };
    get assertMessage () { return $('//XCUIElementTypeStaticText[@name="Success"]') };

  login () {
        this.goToLogin.click();
        this.email.setValue('15109256726@163.com');
        this.password.setValue('12345678');
        this.submit.click();
        this.assertMessage.waitForDisplayed();
        const isDisplayed = this.assertMessage.isDisplayed()
        expectChai(isDisplayed).to.equal(true); 
    }
}

module.exports = new LoginPage();