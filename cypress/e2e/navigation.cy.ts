describe('navigation tests', () => {
  it('tests opening and closing sidebar', () => {
    cy.get('[data-id="open-sidebar"]').should('not.exist');
    cy.visit('/');
    cy.get('[data-id="open-sidebar-btn"]').click();
    cy.get('[data-id="open-sidebar"]').should('be.visible');
    cy.get('[data-id="close-sidebar-btn"]').click();
    cy.get('[data-id="open-sidebar"]').should('not.exist');
  });
  
  it.only('tests navigation', () => {
    cy.visit('/');
    cy.get('[data-id="open-sidebar-btn"]').click();

    cy.contains(/about me/i).should('not.exist');
    
    cy.get('[data-id="about-link"]').click();
    
    cy.get('[data-id="open-sidebar"]').should('not.exist');

    cy.contains(/about me/i);
  })

})