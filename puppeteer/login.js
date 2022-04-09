const puppeteer = require('puppeteer')
const fs = require('fs/promises');


async function start() {
    const browser = await puppeteer.launch({
        headless: false,
        executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        defaultViewport: {
        width: 1920,
        height: 1080
        }
    })

    const awesome_page = await browser.newPage()

    await awesome_page.goto('https://mae-something-awesome.netlify.app');
    await awesome_page.click('#root > div.navigation > div > div > ul > li:nth-child(1)')
    await awesome_page.waitForTimeout(1000)

    const page = await browser.newPage()
    await page.bringToFront()
    await page.goto('https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fmae-something-awesome.netlify.app%3Fid%3Dauth849695&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&client_id=245615667287-nb0938ataneoq84jj6r1bmm9k6sqpngn.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fmae-something-awesome.netlify.app&prompt&fetch_basic_profile=true&gsiwebsdk=2&flowName=GeneralOAuthFlow');
    await page.waitForSelector('input[type="email"]')
    await page.type('input[type="email"]', "mae.something.awesome@gmail.com", {delay: 10});

    await Promise.all([
        page.waitForNavigation(),
        await page.keyboard.press('Enter')
    ]);

    await page.waitForSelector('input[type="password"]', { visible: true });
    await page.type('input[type="password"]', "mae.something.", {delay: 10});
    await page.keyboard.press('Enter')

    await page.waitForTimeout(5000)
    await page.close()

    await awesome_page.goto('https://mae-something-awesome.netlify.app');
    await awesome_page.click('#root > div.navigation > div > div > ul > li:nth-child(1)')
    await awesome_page.waitForTimeout(5000)
    await awesome_page.screenshot({ path: 'something.png' })

    await awesome_page.waitForTimeout(10000)
    await browser.close()
  //await browser.close()
}

start()