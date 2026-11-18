import test, {chromium, firefox }  from "@playwright/test";


test("Launch the Redbus website in Edge browser", async()=>{

    let browser = await chromium.launch({
        channel : 'msedge',
        headless : false
    })
    let context = await browser.newContext()
    let page = context.newPage()
    await (await page).goto("https://www.redbus.in",
        {
          waitUntil: 'domcontentloaded', timeout : 30000
        }
    )
    console.log((await page).title)
    console.log((await page).url);
    await browser.close();
});

test("Launch Flipkart website in Webkit browser", async()=>{

    let browser = await firefox.launch({
        headless : false
    })
    let context = await browser.newContext()
    let page = await context.newPage()
    await page.goto("https://www.flipkart.com",
        {
          waitUntil: 'domcontentloaded', timeout : 30000
        });
    console.log(await page.title());
    console.log(page.url());
    await browser.close();
      
});