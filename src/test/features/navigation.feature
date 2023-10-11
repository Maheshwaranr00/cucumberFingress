Feature: Validating navigations of List Pages

Background: 
Given Launch the url of fingress
And Click the menu option
And Click the fingress explorer
And Click the List pages option

Scenario: Validating the navigations of tabular

When Click on the tabular option
Then It should contain the valid url

Scenario: Validating the navigations of List view

When Click on the list view option
Then List view page should contain the valid url

Scenario: Validating the navigations of Calendar

When Click on the Calendar option
Then Calendar page should contain the valid url

Scenario: Validating the navigations of Master Details

When Click on the Master Details option
Then Master Details page should contain the valid url

Scenario: Validating the navigations of Kanban

When Click on the Kanban option
Then Kanban page should contain the valid url

Scenario: Validating the navigations of Card View

When Click on the Card View option
Then Card View page should contain the valid url

Scenario: Validating the navigations of All List view

When Click on the All List view option
Then All List view page should contain the valid url

Scenario: Validating the navigations of Time line view

When Click on the Time line view option
Then Time line view page should contain the valid url

Scenario: Validating the navigations of Tree view

When Click on the Tree view option
Then Tree view page should contain the valid url

