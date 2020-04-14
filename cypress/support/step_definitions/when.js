import { When } from "cypress-cucumber-preprocessor/steps";

responsePayload = null;

When("user requests pre-feasibility {string} at {string} by {string} for {string}", ($date,$time,$type,$status) => {
  await cy.request(`https://backend-airportprefeasibility-qa.qa.vistajet.io/1/pre-feasibility/validate-airport?airportIcao=AGAT&tailNumber=9H-VCA&dateTime=${$date}T${$time}&flightType=LIVE`).then(response => {
    responsePayload = JSON.parse(response.body);    
  });
});6
