const helper = require("protractor-helper");

class CreateUserForm {
  constructor() {
    this.createButton = element(by.css('input[type="submit"]'));
    this.error = element(by.css("#error_explanation h2"));
    this.firstName = element(by.id("user_name"));
    this.lastName = element(by.id("user_lastname"));
    this.email = element(by.id("user_email"));
    this.success = element(by.id("notice")); 
  }

  fillMandatoryFieldsAndSubmit(firstName, lastName, email) {
    helper.fillFieldWithText(this.firstName, firstName);
    helper.fillFieldWithText(this.lastName, lastName);
    helper.fillFieldWithText(this.email, email);
    helper.click(this.createButton);
  }
}

module.exports = CreateUserForm;