import { browser, expect } from '@wdio/globals'
import LoginPage from '../pages/login.page.ts'
import HomePage from '../pages/home.page.ts'
import TvPage from '../pages/tv.page.ts'
const credentials = import('../data/credentials.json')

describe('After Loging into the mlb web application with valid credentials', () => {
    it('should be able to navigate to mlb.tv and see videos of my favorite mlb team', async () => {

        // user visits MLB login page and logs in
        await LoginPage.open()
        await LoginPage.okCookies()
        await LoginPage.enterEmail((await credentials).username)
        await LoginPage.btnSubmitUsername.click()
        await expect(LoginPage.textVerifyPassword).toHaveText('Select from the following options to finish logging in to the account cluhring@gmail.com')
        await LoginPage.btnVerifyAccountWithPassWord.click()
        await expect(LoginPage.textEnterVerifyPassword).toHaveText('Enter the password associated with the email account cluhring@gmail.com.')
        await LoginPage.enterPassword((await credentials).password)
        await LoginPage.btnLoginWithPassword.click()

        try {
            await HomePage.accountProfile.waitForExist({ timeout: 10000 });
        } catch (error) {
            console.log(error);
        }

        // verify user now logged in
        // await expect(HomePage.btnAccountProfile).toHaveAttribute('class', 'account--logged-in')

        // update with click of WATCH or MLB.TV
        await TvPage.open()

        // verify favorite team videos displayed
        try {
            await TvPage.txtGetCaughtUp.waitForExist({ timeout: 20000 });
            await TvPage.txtGetCaughtUp.scrollIntoView();
        } catch (error) {
            console.log(error);
        }

        await expect(TvPage.txtFavoriteTeamMostPop).toHaveText('Colorado Rockies Most Popular')
        await expect(TvPage.txtFavoriteTeamFeaturedContent).toHaveText('Colorado Rockies Featured Content')
        await expect(TvPage.txtFavoriteTeamMiLBHighlights).toHaveText('Colorado Rockies MiLB Highlights')
        await expect(TvPage.txtFavoriteTeamDataViz).toHaveText('Colorado Rockies Data Visualizations')
        await expect(TvPage.txtFavoriteTeamVault).toHaveText('Colorado Rockies Vault')

    })
})



