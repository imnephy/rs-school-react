const fillAllInputs = () => {
  cy.get('[type="text"]').type('Ilya');
  cy.get('.form-inputs__short > ._MyInput_qkwtr_2').type('2023-12-25');
  cy.get('[data-testid="country-select"]').select('Russia');
  cy.get('#checkPersonal').check();
};

describe('Form Page', () => {
  beforeEach(() => cy.visit('http://localhost:5173/forms'));
  it('create a card and store it on page change', () => {
    fillAllInputs();
    cy.get('._MyBtn_j8hnp_2').click();
    cy.get('[href="/"]').click();
    cy.get('[href="/forms"]').click();
    cy.contains(/Ilya/i);
  });
  it('validate name input', () => {
    cy.visit('http://localhost:5173/forms');
    cy.get('[type="text"]').type('123');
    cy.get('._MyBtn_j8hnp_2').click();
    cy.contains(/should be > 3/i);
    cy.get('[type="text"]').clear();
    cy.get('[type="text"]').type('Ilya');
    cy.contains('[type="text"]', /should be > 3/i).should('not.exist');
  });
});
