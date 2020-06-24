Feature: Navigation

Scenario: User Navigates to Preview
  When I navigate to preview
  Then the page title is 'The Tug Life – I didn\'t choose the Tug Life, the Tug Life chose me'

@active
Scenario: User Searches for Tugboat
  When I navigate to preview
  When I search for tugboat
  Then there are 10 search results

Scenario: User Posts Comment
  When I navigate to preview
  And I post a comment