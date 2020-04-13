/* global cy, Given */

import { Given } from "cypress-cucumber-preprocessor/steps";
import main from "../pages/main";

Given('the user is in automationpractice main page', () => {
    cy.visit('http://automationpractice.com');
});

Given('the user clicks on sign in', () => {
    cy.contains('Sign in').click();
});

Given('', () => {

});

Given('', () => {

});