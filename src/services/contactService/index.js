import httpClient from '../httpClient';

const BASE_URL = 'https://contact-form-api-jamstack.herokuapp.com/message';

export const contactService = {
  async sendRequest({ name, email, message }, httpClientModule = httpClient) {
    return httpClientModule(BASE_URL, {
      method: 'POST',
      body: {
        name,
        email,
        message,
      },
    });
  },
};
