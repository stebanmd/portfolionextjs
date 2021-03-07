import React from 'react';
import { Lottie } from '@crello/react-lottie';
import sentAnimation from '../../animations/sent.json';
import loadingAnimation from '../../animations/loading.json';
import errorAnimation from '../../animations/error.json';
import TextField from '../../common/TextField';
import { Button } from '../../common/Button';
import { Box } from '../../foundation/layout/Box';
import { Grid } from '../../foundation/layout/Grid';
import { Text } from '../../foundation/Text';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent() {
  const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);
  const [isEmailValid, setIsEmailValid] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(formStates.DEFAULT);

  const [contactInfo, setContactInfo] = React.useState({
    email: '',
    message: '',
    name: '',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setContactInfo({
      ...contactInfo,
      [fieldName]: event.target.value,
    });
  }

  function handleSubmission(event) {
    event.preventDefault();
    setIsFormSubmitted(true);
    setSubmissionStatus(formStates.LOADING);

    fetch('https://contact-form-api-jamstack.herokuapp.com/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactInfo),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Could not sent message');
      })
      .then(() => {
        setSubmissionStatus(formStates.DONE);
      })
      .catch(() => {
        setSubmissionStatus(formStates.ERROR);
      });
  }

  const isFormInvalid = contactInfo.email.length === 0
    || contactInfo.name.length === 0
    || contactInfo.message.length === 0
    || !isEmailValid;

  return (
    <form
      onSubmit={handleSubmission}
    >
      <Text
        tag="h2"
        variant="subTitle"
        color="tertiary.main"
      >
        Envie sua mensagem!
      </Text>
      <div>
        <TextField
          placeholder="Nome"
          name="name"
          value={contactInfo.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <TextField
          placeholder="E-mail"
          name="email"
          value={contactInfo.email}
          onChange={handleChange}
          onBlur={() => {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            setIsEmailValid(re.test(contactInfo.email));
          }}
        />
      </div>

      <div>
        <TextField
          tag="textarea"
          rows="8"
          placeholder="Mensagem"
          name="message"
          value={contactInfo.message}
          onChange={handleChange}
        />
      </div>

      <Button
        variant="primary.main"
        type="submit"
        disabled={isFormInvalid || submissionStatus === formStates.LOADING}
        fullWidth
      >
        Enviar
      </Button>

      {isFormSubmitted && submissionStatus === formStates.DONE && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="100px"
            height="100px"
            className="lottie-container basic"
            config={{ animationData: sentAnimation, loop: false, autoplay: true }}
          />
        </Box>
      )}

      {isFormSubmitted && submissionStatus === formStates.LOADING && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="150px"
            height="150px"
            className="lottie-container basic"
            config={{ animationData: loadingAnimation, loop: true, autoplay: true }}
          />
        </Box>
      )}

      {isFormSubmitted && submissionStatus === formStates.ERROR && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="100px"
            height="100px"
            className="lottie-container basic"
            config={{ animationData: errorAnimation, loop: true, autoplay: true }}
          />
        </Box>
      )}
    </form>
  );
}

// eslint-disable-next-line react/prop-types
export default function ContactForm({ propsDoModal }) {
  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="flex-end"
    >
      <Grid.Col
        display="flex"
        paddingRight={{ md: '0' }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          flex={1}
          padding={{
            xs: '16px',
            md: '16px 85px',
          }}
          backgroundColor="white"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsDoModal}
        >
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}
