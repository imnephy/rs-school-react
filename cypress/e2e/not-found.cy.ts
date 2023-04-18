describe('Not found Page', () => {
  it('shows not found and home button sends to home', () => {
    cy.visit('http://localhost:5173/gjdsfhgklsjfh');
    cy.contains(/Page not found/i);
    cy.get('.not-found > a').click();
    cy.contains(/monster/i);
  });
});
