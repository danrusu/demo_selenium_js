const { By, until } = require('selenium-webdriver')
  , DEFAULT_EXPLICIT_TIMEOUT = 5000; // ms

// testerHomePage POM
const testerHomePage = driver => {

  // private web elements selectors
  const heading = By.css('h1');

  const api = {

    url: 'http://danrusu.ro/uiTest/testerHome.html',

    headingText: 'tester home page',


    getHeadingText: async () => {
      return await driver.findElement(heading).getText();
    },


    waitForUrl: async () => await driver.wait(
      until.urlIs(api.url),
      DEFAULT_EXPLICIT_TIMEOUT
    ),


    waitForCorrectHeadingText: async () => await driver.wait(
      until.elementTextContains(
        driver.findElement(heading),
        api.headingText
      ),
      DEFAULT_EXPLICIT_TIMEOUT
    )
  }

  return api;
};

exports.testerHomePage = testerHomePage;
