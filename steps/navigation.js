import { When, Then } from "cucumber";
const { expect } = require("chai");

When("I navigate to {string}", function(url) {
  browser.url(url);
});

When("I navigate to preview", function() {
  browser.url(process.env.TUGBOAT_DEFAULT_SERVICE_URL);
});

When(/^I search for (.*)/, function(query) {
  browser.pause(2000);
  const toggle = browser.$(".search-toggle");
  browser.execute("arguments[0].click();", toggle);
  browser.pause(2000);
  browser.$("#search-form-1").setValue(query + "\n");
  browser.pause(2000);
  expect(true).to.equal(true);
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
