import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../../theme/Logo';
import { Text } from '../../foundation/Text';
import { MenuWrapper } from './style';

export default function Menu({ onContactClick }) {
  return (
    <MenuWrapper>
      <Logo />
      <MenuWrapper.RightSide>
        <li>
          <Text
            tag="a"
            href="/about"
            variant="paragraph1"
          >
            Sobre Mim
          </Text>
        </li>
        <li>
          <Text
            cursor="pointer"
            variant="paragraph1"
            onClick={onContactClick}
          >
            Contato
          </Text>
        </li>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}

Menu.propTypes = {
  onContactClick: PropTypes.func.isRequired,
};
