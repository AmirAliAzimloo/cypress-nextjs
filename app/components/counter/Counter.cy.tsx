import React from 'react'
import Counter from './Counter'

describe('<Counter />', () => {
  it('renders', () => {
    cy.mount(<Counter />);
    cy.contains(/counter/i);
    cy.get('[data-id="count-number"]').should('have.text','0');
    cy.get('[data-id="plus-count-btn"]').click();
    cy.get('[data-id="count-number"]').should('have.text','1');
    cy.get('[data-id="minus-count-btn"]').click();
    cy.get('[data-id="count-number"]').should('have.text','0');
  })
})