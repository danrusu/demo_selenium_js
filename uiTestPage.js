const { By, until } = require('selenium-webdriver');
const DEFAULT_EXPLICIT_TIMEOUT = 5000; // ms

// uiTest POM
const uiTestPage = driver => {

  // private web elements selectors
  const username = By.id('username');
  const password = By.id('password');
  const loginBtn = By.id('login');


  const api = {

    url: 'http://danrusu.ro/uiTest/uiTest.html',


    navigate: async () => await driver.get(api.url),


    waitForUrl: async () => await driver.wait(
      until.urlIs(api.url),
      DEFAULT_EXPLICIT_TIMEOUT
    ),


    // actions
    sendUsername: async (usernameText) =>
      driver.findElement(username).sendKeys(usernameText),


    sendPassword: async (passwordText) =>
      driver.findElement(password).sendKeys(passwordText),


    login: async () => {
      driver.findElement(loginBtn).click();
    }

  };

  return api;
};

exports.uiTestPage = uiTestPage;
