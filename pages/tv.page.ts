import { $, $$ } from '@wdio/globals'
import Page from './page.ts';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TvPage extends Page {

    public get txtGetCaughtUp() {
        return $('#homepage-carousel-get-caught-up h3')
    }

    public get txtFavoriteTeamMostPop() {
        return $('#homepage-carousel-colorado-rockies-most-popular h3')
    }

    public get txtFavoriteTeamFeaturedContent() {
        return $('#homepage-carousel-colorado-rockies-featured-content h3')
    }

    public get txtFavoriteTeamMiLBHighlights() {
        return $('#homepage-carousel-colorado-rockies-milb-highlights h3')
    }

    public get txtFavoriteTeamDataViz() {
        return $('#homepage-carousel-colorado-rockies-data-visualizations h3')
    }

    public get txtFavoriteTeamVault() {
        return $('#homepage-carousel-colorado-rockies-vault h3')
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open() {
        return super.open('tv');
    }
}

export default new TvPage();


