describe('Home Page', () => {
  it('loads successfully and displays the header', () => {
    cy.visit('/');
    cy.get('app-header').should('exist');
  });

  it('displays the footer', () => {
    cy.visit('/');
    cy.get('app-footer').should('exist');
  });
});
