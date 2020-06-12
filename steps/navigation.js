import { Before, Given, When, Then } from "cucumber";
import HomePage from "../pages/HomePage";
const { expect } = require("chai");

Before(() => {
  browser.maximizeWindow();
})

When("I navigate to {string}", function(url) {
  browser.url(url);
});

When("I navigate to preview", function() {
  browser.url(process.env.TUGBOAT_DEFAULT_SERVICE_URL);
});

When(/^I search for (.*)/, function(query) {
  HomePage.search(query);
});

Then(/there are (.*) search results/, function(count) {
  const actualCount = $(".intro-text").getText();
  expect(actualCount).to.equal("We found " + count + " results for your search.");
});

Then("the page title is {string}", { timeout: 60 * 1000 }, function(title) {
  const expected = browser.getTitle();
  expect(title).to.equal(expected);
});

Then("take a screenshot", function() {
  browser.saveScreenshot("./screenshots/" + Math.random() + ".png");
});
