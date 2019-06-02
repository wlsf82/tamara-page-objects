module.exports.config = {
  baseUrl: "https://automacaocombatista.herokuapp.com",
  specs: ["specs/*.spec.js"],
  directConnect: true,
  onPrepare: () => {
    browser.waitForAngularEnabled(false);
  }
}