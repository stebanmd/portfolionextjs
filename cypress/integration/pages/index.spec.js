/// <reference types="cypress" />
import HomeScreenPageObject from '../../../src/components/screens/HomeScreen/HomeScreen.pageObject';

describe('/pages/index', () => {
  describe('when click in contato', () => {
    it('opens and the modal', () => {
      // pré-teste
      cy.intercept('https://contact-form-api-jamstack.herokuapp.com/message')
        .as('contactPost');

      const homeScreen = new HomeScreenPageObject(cy);

      homeScreen.openContact()
        .fillContactFormFields({
          name: 'Test',
          email: 'test@dev.com',
          message: 'Just a simple message',
        })
        .submitContactForm();

      cy.wait('@contactPost').then((res) => {
        const { body } = res.response;
        expect(body).to.have.property('name', 'Test');
        expect(body).to.have.property('email', 'test@dev.com');
        expect(body).to.have.property('message', 'Just a simple message');
      });
    });
  });
});
