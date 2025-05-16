import { $ } from '@wdio/globals'
import Page from './page.ts';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
    //  */
    // public get accountProfile() {
    //     return $('#react-header span.header__nav-top__nav-item__text')
    // }

    public get accountProfile() {
        return $('#react-header span.header__nav-top__nav-item__text')
    }

    // public open() {
    //     return super.open('');
    // }
}

export default new HomePage();
