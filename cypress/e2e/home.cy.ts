/// <reference types="Cypress" />

describe('Home', () => {
  before(() => {
    cy.visit('http://localhost:5173');
  });
  it('Can change pages and see different content', () => {
    cy.get('[data-testid="next-page-button"]').click();
    cy.contains(/hunter x hunter/i);
    cy.get('[data-testid="next-page-button"]').click();
    cy.contains(/Pretty Face/i);
    cy.get('[data-testid="prev-page-button"]').click();
    cy.contains(/hunter x hunter/i);
    cy.get('[data-testid="prev-page-button"]').click();
    cy.contains(/death note/i);
    cy.get('._MyInput_qkwtr_2').type('chainsaw man{enter}');
    cy.get('form > ._MyBtn_j8hnp_2').click();
    cy.contains(/chainsaw man/i);
    cy.get('[href="/forms"]').click();
    cy.get('[href="/"]').click();
    cy.get('._MyInput_qkwtr_2').should('have.value', 'chainsaw man');
    cy.get('._MyInput_qkwtr_2').clear();
    cy.get('form > ._MyBtn_j8hnp_2').click();
    cy.contains(/details/i).click();
    cy.contains(/Kenzou Tenma/i);
    cy.get('[data-testid="closeBtn"]').click();
  });
});
