const cucumber = require("@badeball/cypress-cucumber-preprocessor").default;

module.exports = (on, config) => {
  on("file:preprocessor", cucumber({
    // Change the step_definitions path to your desired directory
    step_definitions: "cypress/e2e/step_definitions",
  }));
  return config;
};






