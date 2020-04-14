import { Then } from "cypress-cucumber-preprocessor/steps";

Then('response for {string} is {string}', ($field,$response) => {
    switch ($field) {
        case "securityRiskRating": 
            break;
        default:
            break;
    }
});