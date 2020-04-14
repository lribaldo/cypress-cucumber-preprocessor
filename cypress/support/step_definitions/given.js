/* global cy, Given */

import { Given } from "cypress-cucumber-preprocessor/steps";
import main from "../pages/main";

const restRequest = require("../../");

Given("the user is in automationpractice main page", () => {
  cy.visit("http://automationpractice.com");
});

Given("the user clicks on sign in", () => {
  cy.contains("Sign in").click();
});

Given(
  "on Airport Centre the field securityRiskRating value is value",
  async () => {
    // if ($field === "securityRiskRating") {
    await cy
      .request(
        "https://backend-airportprefeasibility-qa.qa.vistajet.io/1/pre-feasibility/validate-airport?airportIcao=AGAT&tailNumber=9H-VCA&dateTime=2020-01-02T10:00&flightType=LIVE"
      )
      .then(response => {
        cy.log("TESTANDO:::::", response.body);
        if (response.status === 200) return;
      });

    // }
  }
);

Given("", () => {});
