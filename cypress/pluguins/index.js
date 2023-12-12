/*const cucumber = require("@badeball/cypress-cucumber-preprocessor").default;


module.exports = (on, config) => {
  on("file:preprocessor", cucumber({
    // Change the step_definitions path to your desired directory
    step_definitions: "cypress/e2e/step_definitions",
  }));
  return config;
};
*/





const cucumber = require("@badeball/cypress-cucumber-preprocessor").default;
const cypressTags = require("cypress-tags"); // import the cypress-tags plugin

module.exports = (on, config) => {
  on("file:preprocessor", cucumber({
    // Change the step_definitions path to your desired directory
    step_definitions: "cypress/e2e/step_definitions",
  }));
  return cypressTags(config); // call the cypress-tags plugin with the config object
};
