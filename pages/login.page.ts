import { $ } from '@wdio/globals'
import Page from './page.ts';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    public get okCookiesButton() {
        return $('#onetrust-accept-btn-handler');
    }

    public get inputUsername() {
        return $('#input28');
    }

    public get inputPassword() {
        return $('#input88');
    }

    public get btnSubmitUsername() {
        return $('input[value="Continue"]');
    }

    public get btnSubmitPassword() {
        return $('input[value="Login"]');
    }

    public get textVerifyPassword() {
        return $('p.okta-form-subtitle');
    }

    public get textEnterVerifyPassword() {
        return $('div.widget-subheader')
    }

    public get btnLoginWithPassword() {
        return $('input[value="Log In"]');
    }

    public get btnVerifyAccountWithPassWord() {
        return $('=Verify Account With Password')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async enterEmail(username: string) {
        await this.inputUsername.setValue(username);
        //await this.btnSubmitUsername.click();
    }

    public async enterPassword(password: string) {
        await this.inputPassword.setValue(password);
        // await this.btnSubmitPassword.click();
    }

    public async okCookies() {
        await this.okCookiesButton.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open() {
        return super.open('login');
    }
}

export default new LoginPage();
