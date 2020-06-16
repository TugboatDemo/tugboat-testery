Feature: Navigation

Scenario: User Navigates to Preview
  When I navigate to preview
  Then the page title is 'The Tug Life – I didn\'t choose the Tug Life, the Tug Life chose me'


Scenario: User Searches for Tugboat
  When I navigate to preview
  When I search for cow
  Then there are 6 search results

