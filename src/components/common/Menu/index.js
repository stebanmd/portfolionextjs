import React from 'react';
import Logo from '../../../theme/Logo';
import { Text } from '../../foundation/Text';
import ContactForm from '../../pattenrs/ContactForm';
import { Modal } from '../Modal';
import { MenuWrapper } from './style';

export default function Menu() {
  const [isModalOpen, setModalState] = React.useState(false);

  return (
    <MenuWrapper>
      <Logo />
      <Modal isOpen={isModalOpen} onClose={() => setModalState(false)}>
        {(propsDoModal) => (
          <ContactForm propsDoModal={propsDoModal} />
        )}
      </Modal>

      <MenuWrapper.RightSide>
        <li>
          <Text
            tag="a"
            href="/skills"
            variant="paragraph1"
          >
            Habilidades
          </Text>
        </li>
        <li>
          <Text
            cursor="pointer"
            variant="paragraph1"
            onClick={() => setModalState(true)}
          >
            Contato
          </Text>
        </li>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
