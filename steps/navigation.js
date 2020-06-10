import { When, Then } from "cucumber";
const { expect } = require("chai");

When("I navigate to {string}", function(url) {
  browser.url(url);
});

When("I navigate to preview", function() {
  browser.url(process.env.TUGBOAT_DEFAULT_SERVICE_URL);
});

Then("the page title is {string}", { timeout: 60 * 1000 }, function(title) {
  const expected = browser.getTitle();
  expect(title).to.equal(expected);
});

Then("take a screenshot", function() {
  browser.saveScreenshot("./screenshots/" + Math.random() + ".png");
});
