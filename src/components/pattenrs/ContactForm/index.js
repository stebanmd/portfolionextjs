import React from 'react';
import * as yup from 'yup';
import { Lottie } from '@crello/react-lottie';
import sentAnimation from '../../animations/sent.json';
import loadingAnimation from '../../animations/loading.json';
import errorAnimation from '../../animations/error.json';
import TextField from '../../common/TextField';
import { Button } from '../../common/Button';
import { Box } from '../../foundation/layout/Box';
import { Grid } from '../../foundation/layout/Grid';
import { Text } from '../../foundation/Text';
import { useForm } from '../../../infra/hooks/useForm';
import { contactService } from '../../../services/contactService';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

const messageSchema = yup.object().shape({
  name: yup.string()
    .min(3, 'Preencha pelo menos 3 caracteres')
    .required('Campo obrigatório'),
  email: yup.string()
    .min(8, 'Sua senha precisa ter ao menos 8 caracteres')
    .email('Esse endereço de e-mail é invalido')
    .required('Campo obrigatório'),
  message: yup.string()
    .min(3, 'Preencha pelo menos 3 caracteres')
    .required('Campo obrigatório'),
});

// eslint-disable-next-line react/prop-types
function FormContent({ onSubmit }) {
  const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(formStates.DEFAULT);

  const initialValues = {
    email: '',
    message: '',
    name: '',
  };

  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      setSubmissionStatus(formStates.LOADING);
      form.setIsFormDisabled(true);
      contactService.sendRequest({
        name: values.name,
        email: values.email,
        message: values.message,
      })
        .then(() => {
          setSubmissionStatus(formStates.DONE);
        })
        .catch(() => {
          setSubmissionStatus(formStates.ERROR);
        })
        .finally(() => {
          setIsFormSubmitted(true);
          form.setIsFormDisabled(false);
        });
    },
    async validateSchema(values) {
      return messageSchema.validate(values, {
        abortEarly: false,
      });
    },
  });

  return (
    <form
      id="formContact"
      onSubmit={onSubmit || form.handleSubmit}
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
          value={form.values.name}
          error={form.errors.name}
          isTouched={form.touched.name}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
      </div>

      <div>
        <TextField
          placeholder="E-mail"
          name="email"
          value={form.values.email}
          error={form.errors.email}
          isTouched={form.touched.email}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
      </div>

      <div>
        <TextField
          tag="textarea"
          rows="8"
          placeholder="Mensagem"
          name="message"
          value={form.values.message}
          error={form.errors.message}
          isTouched={form.touched.message}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
      </div>

      <Button
        variant="primary.main"
        type="submit"
        disabled={form.isFormDisabled || submissionStatus === formStates.LOADING}
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
