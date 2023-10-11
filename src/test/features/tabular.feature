Feature: Validating functionalities of Tabular
Background:
Given Launch the url of fingress
And Click the menu option
And Click the fingress explorer
And Click the List pages option
And Click on the tabular option

Scenario: validating filters of tabular1

And Click on the reference filter
And Enter the valid the input
When Click on the Search box
Then The required row should be displayed 
When Click on the clear
Then The page should be normal

Scenario: validating filters of tabular2

And Click on the customer reference filter
And Enter the valid the customer reference 
When Click on the Search box
Then The required row should be displayed 
When Click on the clear of customer reference
Then The page should be normal

Scenario: validating filters of tabular3

And Click on the stage filter
And Enter the valid the stage state
When Click on the Search box
Then Get the count of displayed rows 
When Click on the clear of stage
Then get the count of normal page

Scenario: validating filters of tabular4

And Click on the status filter
And Enter the valid the status 
When Click on the Search box
Then Get the count of displayed rows 
When Click on the clear of status
Then get the count of normal page

