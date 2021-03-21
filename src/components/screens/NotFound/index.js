import React from 'react';
import { Box } from '../../foundation/layout/Box';
import { Text } from '../../foundation/Text';

export default function NotFoundScreen() {
  return (
    <Box
      flex="1"
    >
      <Text
        variant="title"
        tag="h3"
        color="tertiary.main"
        textAlign="center"
      >
        404
      </Text>
      <Text
        variant="subTitle"
        tag="h5"
        color="tertiary.main"
        textAlign="center"
      >
        Página não encontrada =(
      </Text>
    </Box>
  );
}
