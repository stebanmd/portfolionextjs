import React from 'react';
import styled from 'styled-components';
import { Text } from '../../foundation/Text';
import { Box } from '../../foundation/layout/Box';
import { Grid } from '../../foundation/layout/Grid';

export const CapaWrapper = styled.section`
  min-height: 100vh;  
`;

export default function Capa() {
  return (
    <CapaWrapper>
      <Box
        flex="1"
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        justifyContent="space-between"
        backgroundImage="url(/images/bubbles.svg)"
        backgroundRepeat="no-repeat"
        backgroundPosition="bottom right"
      >
        <Grid.Container
          marginTop={{ xs: '32px', md: '200px' }}
        >
          <Grid.Row>
            <Grid.Col
              offset={{ xs: 0, md: 1 }}
              value={{ xs: 12, md: 5 }}
              display="flex"
              alignItems="flex-start"
              justifyContent="center"
              flexDirection="column"
            >
              <Text
                variant="title"
                tag="h1"
                color="tertiary.main"
                textAlign={{
                  xs: 'center',
                  md: 'left',
                }}
              >
                Steban Domingues
              </Text>
            </Grid.Col>
            <Grid.Col
              value={{ xs: 12, md: 6 }}
            >
              <img
                alt="Imagem de pessoa varios acessórios ao redor"
                style={{ display: 'block', margin: 'auto' }}
                src="/images/capa.jpeg"
              />
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      </Box>
    </CapaWrapper>
  );
}