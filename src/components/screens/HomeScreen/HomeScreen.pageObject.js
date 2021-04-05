/// <reference types="cypress" />

export default class HomeScreenPageObject {
  constructor(cy) {
    this.cy = cy;
    this.cy.visit('/');
  }

  openContact() {
    this.cy.get('nav span[cursor="pointer"]').click();
    return this;
  }

  fillContactFormFields({ name, email, message }) {
    this.cy.get('#formContact input[name="name"]').type(name);
    this.cy.get('#formContact input[name="email"]').type(email);
    this.cy.get('#formContact textarea[name="message"]').type(message);
    return this;
  }

  submitContactForm() {
    this.cy.get('#formContact button[type="submit"]').click();
    return this;
  }
}
