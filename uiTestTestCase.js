const { Builder } = require('selenium-webdriver')

  // needed POMs
  , { uiTestPage } = require('./uiTestPage.js')
  , { testerHomePage } = require('./testerHomePage.js')

  // assertion lib
  , { assert } = require('chai');


// uiTest TEST
(async () => {

  const driver = await new Builder()
    .forBrowser('chrome')
    .build()
    .catch(err => console.log(`Driver build: ${err}`));


  try {

    /*** Note:
    For actions on a single page this style is more concise:

    const { navigate, sendUsername, sendPassword, login } = uiTestPage(driver);

    await navigate();
    await sendUsername('tester');
    await sendPassword('testpass');
    await login();
    ***/

    // I use index suffix for pages objects names just
    // to be aware of how many pages we are interacting with.

    // uiTestPage - 1st page
    const uiTestPage1 = uiTestPage(driver);

    await uiTestPage1.navigate();

    await uiTestPage1.waitForUrl();

    await uiTestPage1.sendUsername('tester');

    await uiTestPage1.sendPassword('testpass');

    await uiTestPage1.login();

    // testerHomePage - 2nd page
    const testerHomePage2 = testerHomePage(driver);

    await testerHomePage2.waitForUrl();

    assert.equal(await testerHomePage2.getHeadingText(),
      testerHomePage2.headingText,
      "Check heading text");
  }

  catch (err) {
    console.log(`Test: ${err}`);
  }

  finally {
    await driver.quit()
      .catch(err => console.log(`Driver quit: ${err}`));
  }

})();
