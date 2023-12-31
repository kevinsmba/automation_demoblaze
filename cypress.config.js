/// <reference types="cypress" />
// Import the modules
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const cucumber = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

const stepDefinitionsDirectory = "cypress/e2e/step_definitions/*.{js,mjs,ts,tsx}";

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await cucumber.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com/",
    setupNodeEvents,
    specPattern: "cypress/e2e/features/*.feature",
    step_definitions: stepDefinitionsDirectory,
    chromeWebSecurity: false
  },
});

