Feature: Account Creation
  As a automationpractice user
    I want to be able to login into the automationpractice site

# Background: Account creation
#     Given the user enters to create an account with the email "testame@testing.com"
#     And filled all mandatory fields
#     When user clicks on register
#     Then a new account is created

@accountCreation
Scenario: Successful login
  Given the user is in automationpractice main page
  And the user clicks on sign in
  When the user create an account using "testame@testing.com" email
  # And fill all mandatory fields
  # And clicks on register button
  Then the account is created