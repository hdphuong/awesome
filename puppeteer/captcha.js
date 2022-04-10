const puppeteer = require('puppeteer-extra')
const RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha')

puppeteer.use(
    RecaptchaPlugin({
      provider: { id: '2captcha', token: '2769c483a63ac36853537e466fdb5d3b' },
      visualFeedback: true 
    })
)

async function start() {
    const browser = await puppeteer.launch({
        headless: false,
        executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        defaultViewport: {
        width: 1366,
        height: 800
        },
        args: [
          '--disable-features=IsolateOrigins,site-per-process',
          '--flag-switches-begin --disable-site-isolation-trials --flag-switches-end'
        ]
    })

    const page = await browser.newPage()
    await page.setJavaScriptEnabled(true);
    await page.goto('https://mae-something-awesome.netlify.app');
    await page.click('#root > div.navigation > div > div > ul > li:nth-child(2)')

    await page.solveRecaptchas()


    //await Promise.all([
     //   page.waitForNavigation(),
    //])

    await page.screenshot({ path: 'response.png', fullPage: true })
}

start()