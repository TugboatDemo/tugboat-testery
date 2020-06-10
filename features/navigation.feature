Feature: Navigation

Scenario: User Navigates to Preview
  When I navigate to preview
  Then the page title is 'The Tug Life – I didn\'t choose the Tug Life, the Tug Life chose me'

Scenario: User Searches Google
  When I navigate to "http://www.google.com"
  Then the page title is 'Google'

@ignore
Scenario: User Goes to Amazon
  When I navigate to 'http://www.amazon.com'
  Then the page title is "This test should not run since it is ignored - bogus"

@github
Scenario: User Goes to Github
  When I navigate to 'http://www.github.com'
  Then the page title is "The world’s leading software development platform · GitHub"
	Then take a screenshot

@table
Scenario Outline: Navigation Tests
	When I navigate to '<url>'
	Then the page title is '<title>'

	Examples:
	| name   | url                   | title |
	| Google | http://www.google.com | Google|
	| Yahoo  | http://www.yahoo.com  | Yahoo |