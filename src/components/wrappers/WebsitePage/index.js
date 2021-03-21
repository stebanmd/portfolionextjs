/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../common/Footer';
import Menu from '../../common/Menu';
import Capa from '../../common/Capa';
import SEO from '../../common/SEO';
import { Modal } from '../../common/Modal';
import { Box } from '../../foundation/layout/Box';
import ContactForm from '../../pattenrs/ContactForm';

export const WebsitePageContext = React.createContext({
  toggleContactModal: () => {},
});

export default function WebsitePageWrapper({
  children,
  seoProps,
  pageBoxProps,
  menuProps,
}) {
  const [isModalOpen, setModalState] = React.useState(false);

  return (
    <WebsitePageContext.Provider
      value={{
        toggleContactModal: () => {
          setModalState(!isModalOpen);
        },
      }}
    >
      <SEO
        {...seoProps}
      />

      <Box
        flex="1"
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        {...pageBoxProps}
      >
        <Modal isOpen={isModalOpen} onClose={() => setModalState(false)}>
          {(propsDoModal) => (
            <ContactForm propsDoModal={propsDoModal} />
          )}
        </Modal>

        {menuProps.displayCover && <Capa />}

        {menuProps.display && (
          <Menu
            onContactClick={() => setModalState(!isModalOpen)}
          />
        )}

        {children}

        <Footer />
      </Box>
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  menuProps: {
    display: true,
    displayCover: false,
  },
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
    displayCover: PropTypes.bool,
  }),
  pageBoxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};
