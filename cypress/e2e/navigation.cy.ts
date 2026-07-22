describe('Site Navigation', () => {
  it('navigates from home to the about page', () => {
    cy.visit('/home');
    cy.contains('a', 'About').click();
    cy.url().should('include', '/about');
  });

  it('navigates from home to the skills page', () => {
    cy.visit('/home');
    cy.contains('a', 'Skills').click();
    cy.url().should('include', '/skills');
  });

  it('navigates from home to the projects page', () => {
    cy.visit('/home');
    cy.contains('a', 'Projects').click();
    cy.url().should('include', '/projects');
  });

  it('navigates from home to the contact page', () => {
    cy.visit('/home');
    cy.contains('a', 'Contact').click();
    cy.url().should('include', '/contact');
  });
});
