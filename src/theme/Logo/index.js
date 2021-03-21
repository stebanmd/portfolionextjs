import React from 'react';
import { Text } from '../../components/foundation/Text';

export default function Logo() {
  return (
    <Text tag="a" href="/">
      <img src="/images/logo.png" alt="logo" />
    </Text>
  );
}
