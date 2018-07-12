Feature: TestAnnotations


    Scenario: Test ikman.lk website
      Given I am open the ikman website
      When I click on the property link
      And I click on House link
      And I click on colombo link
      And I click on Price link
      And I can Select min as "<5000000>" and max as "<75000000>"
      And I click Apply Button
      And I click on Beds link
      And I Select the number of Beds
      Then Get the number of Ads count and print it as No of Ads Found
      And Get the Price of the No of Ads found and print them all






