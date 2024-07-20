import { GoBackButton } from '../goBackButton';

it('uses custom text for the button label', () => {
  cy.mount(<GoBackButton></GoBackButton>);
  cy.get('button').should('contains.text', 'Go back');
});
