import App from "../../src/App";
import Problem1 from "../../src/components/problems/Problem1";
import Problem2 from "../../src/components/problems/Problem2";
import Problem3 from "../../src/components/problems/Problem3";
import Problem4 from "../../src/components/problems/Problem4";

describe("problem 1", () => {
  it("will now show the submit button if nothing is typed", () => {
    cy.mount(<Problem1 />);
    cy.get("button.btn.btn-primary")
      .invoke("attr", "hidden")
      .should((hidden) => {
        expect(hidden).to.eq("hidden");
      });
  });

  it("will not show the submit button if less than 8 letters are typed", () => {
    cy.mount(<Problem1 />);
    cy.get("input").clear().type("letters");
    cy.get("button.btn.btn-primary")
      .invoke("attr", "hidden")
      .should((hidden) => {
        expect(hidden).to.eq("hidden");
      });
  });

  it("shows the submit button if 8 letters are typed", () => {
    cy.mount(<Problem1 />);
    cy.get("input").clear().type("8letters");
    cy.get("button.btn.btn-primary")
      .invoke("attr", "hidden")
      .should((hidden) => {
        expect(hidden).to.be.undefined;
      });
  });

  it("shows the submit button if 9 letters are typed", () => {
    cy.mount(<Problem1 />);
    cy.get("input").clear().type("9letters+");
    cy.get("button.btn.btn-primary")
      .invoke("attr", "hidden")
      .should((hidden) => {
        expect(hidden).to.be.undefined;
      });
  });
});

describe("problem 2", () => {
  it("accepts first name, last name, vacation start, and vacation end date then shows a button you can push for a message", () => {
    cy.mount(<Problem2 />);
    cy.get(`body > div > form > div:nth-child(5) > button`).should(
      "be.disabled"
    );
    cy.get(`body > div > form > div:nth-child(1) > input`).type("first name");
    cy.get(`body > div > form > div:nth-child(2) > input`).type("last name");
    cy.get(`body > div > form > div:nth-child(3) > input`).type("2022-10-10");
    cy.get(`body > div > form > div:nth-child(4) > input`).type("2022-10-20");
    cy.get(`body > div > form > div:nth-child(5) > button`).should((button) => {
      expect(button).to.be.enabled;
      button.click();
    });
    cy.get(`body > div > form > div.alert.alert-success`).should((div) => {
      expect(div.text()).to.eq(
        "Thank you for your submission, first name last name."
      );
    });
  });
  it("Button is disabled if start date is after end date", () => {
    cy.mount(<Problem2 />);
    cy.get(`body > div > form > div:nth-child(5) > button`).should(
      "be.disabled"
    );
    cy.get(`body > div > form > div:nth-child(1) > input`).type("first name");
    cy.get(`body > div > form > div:nth-child(2) > input`).type("last name");
    cy.get(`body > div > form > div:nth-child(3) > input`).type("2022-10-20");
    cy.get(`body > div > form > div:nth-child(4) > input`).type("2022-10-10");
    cy.get(`body > div > form > div:nth-child(5) > button`).should((button) => {
      expect(button).to.be.disabled;
      button.click();
    });
  });
  it("Button is disabled if a field is empty", () => {
    cy.mount(<Problem2 />);
    cy.get(`body > div > form > div:nth-child(5) > button`).should(
      "be.disabled"
    );
    cy.get(`body > div > form > div:nth-child(1) > input`).type("first name");
    cy.get(`body > div > form > div:nth-child(3) > input`).type("2022-10-20");
    cy.get(`body > div > form > div:nth-child(4) > input`).type("2022-10-10");
    cy.get(`body > div > form > div:nth-child(5) > button`).should((button) => {
      expect(button).to.be.disabled;
      button.click();
    });
  });
});

describe("Problem 3", () => {
  it("fails the validations correctly", () => {
    cy.mount(<Problem3 />);
    cy.get(`body > div > form > div:nth-child(5) > button`).click();
    cy.get(`body > div > form > div.alert.alert-warning`).should((el) => {
      expect(el.text()).to.eq("All fields must be filled out");
    });
  });

  it("accepts first name, last name, and customer feedback message", () => {
    cy.mount(<Problem3 />);
    cy.get(`body > div > form > div:nth-child(2) > input`).type("first name");
    cy.get(`body > div > form > div:nth-child(3) > input`).type("last name");
    cy.get(`body > div > form > div:nth-child(4) > input`).type(
      "here is some customer feedback"
    );
    cy.get(`body > div > form > div:nth-child(5) > button`).click();
    cy.get(`body > div > div`).should((div) => {
      expect(div.text()).to.eq("Thank you so much. We value your feedback.");
    });
  });
});

describe("Problem 4 - try your best but we don't expect everyone to figure this one out", () => {
  const inputSelectors = [
    "body > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(2) > input",
    "body > div > div > div:nth-child(1) > div:nth-child(3) > input",
    "body > div > div > div:nth-child(1) > div:nth-child(4) > input",
    "body > div > div > div:nth-child(1) > div:nth-child(5) > input",
    "body > div > div > div:nth-child(1) > div:nth-child(6) > input.form-check-input",
  ];
  const liSelectors = [
    "body > div > div > div:nth-child(2) > ul > li",
    "body > div > div > div:nth-child(2) > ul > li:nth-child(2)",
    "body > div > div > div:nth-child(2) > ul > li:nth-child(3)",
    "body > div > div > div:nth-child(2) > ul > li:nth-child(4)",
    "body > div > div > div:nth-child(2) > ul > li:nth-child(5)",
  ];
  const sauces = [
    "Buffalo Ranch",
    "Tamari Chile",
    "Honey Mustard",
    "Sweet & Sour",
    "Other",
  ];

  it("hides the input text field for other", () => {
    cy.mount(<Problem4 />);
    cy.get(
      "input[type=text]"
    )
      .invoke("attr", "hidden")
      .should((hidden) => {
        expect(hidden).to.eq("hidden");
      });
  });
  it("displays the correct dipping choices", () => {
    cy.mount(<Problem4 />);
    inputSelectors.forEach((selector, idx) => {
      cy.get(selector).click();
      if (idx < sauces.length - 1) {
        cy.get(liSelectors[idx]).should((li) => {
          expect(li.text()).to.eq(sauces[idx], `Checking ${sauces[idx]} makes it show up as item ${idx} in the list`);
        });
      }
    });
    inputSelectors.forEach((selector) => {
      cy.get(selector).click();
    });
    cy.get("body > div > div > div:nth-child(2) > ul")
      .children()
      .should((emptyUl) => {
        expect(emptyUl.length).to.eq(0, 'No items appear in the the list after unchecking every sauce');
      });
  });
  it("input textfield is visible when Other is checkmarked", () => {
    cy.mount(<Problem4 />);
    cy.get(inputSelectors[4]).click();
    cy.get(
      "input[type=text]"
    ).should('be.visible')
  });
  it("input textfield content shows up in the  list", () => {
    cy.mount(<Problem4 />);
    cy.get(inputSelectors[4]).click();
    cy.get(
      "input[type=text]"
    ).type("Thousand Island");
    cy.get(`body > div > div > div:nth-child(2) > ul > li`).should((li) => {
      expect(li.text()).to.eq("Thousand Island", 'Added Thousand Island as an "Other" choice, it should appear in the list');
    });
    inputSelectors.splice(0, inputSelectors.length - 1).forEach((selector, idx) => {
      cy.get(selector).click();
    });
    cy.get(`body > div > div > div:nth-child(2) > ul > li:nth-child(5)`).should((li) => {
      expect(li.text()).to.eq("Thousand Island", 'Thousand Island is the last item in a list of five sauces');
    });
  });
});
