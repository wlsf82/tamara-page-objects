const helper = require("protractor-helper");

const CreateUserForm = require("../pageObjects/createUserForm");

describe("Create user form", () => {
  let createUserForm = new CreateUserForm;

  beforeEach(() => browser.get("/users/new"));

  it("Try to create without providing any data", () => {
    helper.click(createUserForm.createButton);

    helper.waitForElementVisibility(createUserForm.error);
    helper.waitForTextToBePresentInElement(createUserForm.error, "3 errors proibiu que este usuário fosse salvo:")
  });

  it("Try to create without providing email", () => {
    createUserForm.fillMandatoryFieldsAndSubmit("Walmyr", "Filho", "");

    helper.waitForElementVisibility(createUserForm.error);
    helper.waitForTextToBePresentInElement(createUserForm.error, "2 errors proibiu que este usuário fosse salvo:")
  });

  it("Successful creation", () => {
    createUserForm.fillMandatoryFieldsAndSubmit("Walmyr", "Filho", "teste@teste.com.br");
    
    helper.waitForElementVisibility(createUserForm.success);
    helper.waitForTextToBePresentInElement(createUserForm.success, "Usuário Criado com sucesso")
  });
});