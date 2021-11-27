const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { clickElement, getText } = require("../../lib/commands.js");
const {setDefaultTimeout} = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);

Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("user is on {string} page", async function (string) {
  return await this.page.goto(`${string}`, {
      setTimeout: 60000,
  });
});
When("user choose day", async function () {
  await clickElement(this.page, ".page-nav > a:nth-child(4)");
});
When("user choose time", async function () {
  await clickElement(this.page, "a.movie-seances__time");
});
When("user select 1 row 1 seat", async function () {
  await clickElement(this.page, ".buying-scheme__row > span:nth-child(10)");
});
When("user select 1 row 2 seat", async function () {
  await clickElement(this.page, ".buying-scheme__row > span:nth-child(8)");
});
When("user select 1 row 3 seat", async function () {
  await clickElement(this.page, ".buying-scheme__row > span:nth-child(9)");
  });
When("user select the booked place", async function () {
  await clickElement(this.page, ".buying-scheme__row > span:nth-child(10)");
});
When("user click button", async function () {
  await clickElement(this.page, "button.acceptin-button");
  });
When("user click receive QR", async function () {
  await clickElement(this.page, "button.acceptin-button");
});
Then("user see text {string}", async function (string) {
    const actual = await getText(this.page, "p.ticket__hint");
    const expected = await string;
    expect(actual).contains(expected);
  });
Then("user see button disabled {string}", async function (string) {
    const actual = String(await this.page.$eval("button", (button) => {
        return button.disabled;
      })
    );
    const expected = await string;
    expect(actual).contains(expected);
  });