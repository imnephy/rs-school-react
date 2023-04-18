describe('about', () => {
  it('load about page by click', () => {
    cy.visit('http://localhost:5173');
    cy.get('[href="/about"]').click();
    cy.contains(/about us/i);
  });
});
