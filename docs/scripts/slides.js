import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

// One method per module
function school() {
  return [
    "00-school/00-TITLE.md",
    "00-school/speaker-jge.md",
    "00-school/speaker-nfr.md",
  ]
}
function intro() {
  return [
    "01-intro/00-TITLE.md",
    "01-intro/10-dream.md",
    "01-intro/20-life.md",
    "01-intro/30-testing.md",
  ]
}
function cypress() {
  return [
    "02-Cypress/00-TITLE.md",
    "02-Cypress/10-application.md",
    "02-Cypress/20-cypress.md",
    "02-Cypress/30-test-runner.md",
    "02-Cypress/40-running-javascript.md",
    "02-Cypress/50-automatically.md",
    "02-Cypress/60-exercice01-static.md",
  ]
}
function goodtest() {
  return [
    "03-Good test/00-TITLE.md",
    "03-Good test/10-good-tests.md",
    "03-Good test/20-breaking-test.md",
    "03-Good test/30-query.md",
    "03-Good test/40-exercice02-query.md",
  ]
}
function networking() {
  return [
    "04-Networking/00-TITLE.md",
    "04-Networking/10-differents-tests.md",
    "04-Networking/20-e2e-integration.md",
    "04-Networking/30-Networking.md",
    "04-Networking/35-integration-networking.md",
    "04-Networking/40-fixture.md",
    "04-Networking/50-exercice03-intercept.md",
    "04-Networking/60-ouverture.md",
  ]
}
function structurertests() {
  return [
    "05-Structurer tests/00-TITLE.md",
    "05-Structurer tests/10-differents-tests.md",
    "05-Structurer tests/20-command.md",
    "05-Structurer tests/30-exercice04-login.md",
    "05-Structurer tests/40-ouverture.md",
  ]
}

function formation() {
  return [
    ...school(),
    ...intro(),
    ...cypress(),
    ...goodtest(),
    ...networking(),
    ...structurertests(),
  ].map(slidePath => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
