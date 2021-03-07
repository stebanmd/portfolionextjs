import React from 'react';
import Logo from '../../../theme/Logo';
import { Text } from '../../foundation/Text';
import { MenuWrapper } from './style';

const links = [
  {
    text: 'Habilidades',
    url: '/skills',
  },
  {
    text: 'Contato',
    url: '/contact',
  },
];

export default function Menu() {
  return (
    <MenuWrapper>
      <Logo />
      <MenuWrapper.RightSide>
        {links.map((link) => (
          <li key={link.url}>
            <Text
              href={link.url}
              tag="a"
              variant="paragraph1"
            >
              {link.text}
            </Text>
          </li>
        ))}
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
