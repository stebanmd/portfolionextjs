import React from 'react';
import styled from 'styled-components';
import { Button } from '../../common/Button';
import { Box } from '../../foundation/layout/Box';
import { Grid } from '../../foundation/layout/Grid';
import { Text } from '../../foundation/Text';

const BackWrapper = styled.div`
  margin-top: 4.5rem;
  text-align: right;
`;

export default function AboutMe() {
  return (
    <Box
      flex="1"
    >
      <Text tag="h2" variant="subTitle" textAlign="center">Sobre Mim</Text>
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
              alt="Imagem de perfil"
              src="https://via.placeholder.com/350x350"
            />
          </Grid.Col>
          <Grid.Col
            value={{ xs: 12, md: 6 }}
            display="flex"
            justifyContent="flex-start"
            flexDirection="column"
          >
            <Text variant="paragraph2" marginBottom="10px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Text>
            <Text variant="paragraph2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
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
