import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from '../../common/Button';
import { Box } from '../../foundation/layout/Box';
import { Grid } from '../../foundation/layout/Grid';
import { Text } from '../../foundation/Text';

const BackWrapper = styled.div`
  margin-top: 4.5rem;
  text-align: right;
`;

export default function ProjectScreen({ project }) {
  return (
    <Box
      flex="1"
    >
      <Text tag="h2" variant="subTitle" textAlign="center">{project.title}</Text>
      <Grid.Container>
        <Grid.Row>
          <Grid.Col
            value={{ xs: 12, md: 6 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <img
              alt="Imagem do project"
              src={project.img}
              style={{ width: '100%' }}
            />
          </Grid.Col>
          <Grid.Col
            value={{ xs: 12, md: 6 }}
            display="flex"
            justifyContent="flex-start"
            flexDirection="column"
          >
            <Text variant="paragraph2" marginBottom="10px">
              {project.decription}
            </Text>

            <Text variant="paragraph2" marginBottom="10px">
              Clique
              {' '}
              <Text
                variant="paragraph2"
                href={project.url}
                target="_blank"
                fontWeight="700"
              >
                aqui
              </Text>
              {' '}
              para visitar a página
            </Text>

            <BackWrapper>
              <Button
                variant="primary.main"
                href="/"
              >
                Voltar
              </Button>
            </BackWrapper>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Box>

  );
}

ProjectScreen.propTypes = {
  project: PropTypes.shape({
    url: PropTypes.string,
    slug: PropTypes.string,
    img: PropTypes.string,
    title: PropTypes.string,
    resume: PropTypes.string,
    decription: PropTypes.string,
  }).isRequired,
};
