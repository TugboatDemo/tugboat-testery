Feature: Navigation

Scenario: User Navigates to Preview
  When I navigate to preview
  Then the page title is 'The Tug Life – I didn\'t choose the Tug Life, the Tug Life chose me'


Scenario: User Searches for Tugboat
  When I navigate to preview
  When I search for "tugboat"
  Then there are 7 search results

