import { When } from "cypress-cucumber-preprocessor/steps";

When('the user create an account using {string} email', ($email) => {
    cy.get('#email_create').type($email);
    cy.get('button#SubmitCreate > span').click();
})