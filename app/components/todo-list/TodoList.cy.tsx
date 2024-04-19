import React from 'react'
import TodoList from './TodoList';

describe('<TodoList />', () => {
  it('renders', () => {
    cy.mount(<TodoList />);
    cy.contains(/to-do list/i);

    cy.contains(/todo one/i).should('not.exist');

    cy.get('input').type('todo one');
    
    cy.get('[data-id="todo-list"] li').should('have.length',0);
    
    cy.get('button').click();
    
    cy.get('[data-id="todo-list"] li').should('have.length',1);
    
    cy.contains(/todo one/i);
    
    cy.get('[data-id="todo one-remove-btn"]').click();

    cy.get('[data-id="todo-list"] li').should('have.length',0);

    cy.contains(/todo one/i).should('not.exist');
    
  })
})