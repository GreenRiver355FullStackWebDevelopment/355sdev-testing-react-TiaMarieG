// Cypress folder created and formspec file created after created a new spec

// Updating describe to reflect what the test suite does
describe("Tests that a restaurant can be added", () => {
   beforeEach(() => {
      // Updating cy.visit to point to the correct URL
      cy.visit("http://localhost:5173/");
   });
   // Adding an it block and passing it a callback function as the second argument
   it("Adds a restaurant", () => {
      // Using data-cy attributes to select elements for Cypress testing
      // Creating a new restaurant centered around breakfast
      cy.get('[data-cy="input-name"]').type("Breakfast Room");
      cy.get('[data-cy="input-address"]').type(
         "12345 Breakfast St, Breakfast, WA"
      );
      cy.get('[data-cy="input-phone"]').type("123-456-7890");
      cy.get('[data-cy="input-cuisine"]').type("Breakfast");
      cy.get('[data-cy="input-rating"]').type("5");

      // Submit the form
      cy.get('[data-cy="form-submit"]').submit();
 
      // Check that the new restaurant appears
      cy.get(`[data-cy="Breakfast Room"] ul`).within(() => {
         cy.contains("li", "12345 Breakfast St, Breakfast, WA").should(
            "be.visible"
         );
         cy.contains("li", "123-456-7890").should("be.visible");
         cy.contains("li", "Breakfast").should("be.visible");
         cy.contains("li", "5").should("be.visible");
      });
   });
});
