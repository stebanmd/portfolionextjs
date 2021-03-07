import typographyVariants from './typographyVariants';

const colors = {
  background: {
    main: {
      color: '#fff',
    },
  },
  primary: {
    main: {
      color: '#E9C46A',
      contrastText: '#000',
    },
  },
  secondary: {
    main: {
      color: '#FFF8E6',
      contrastText: '#000',
    },
  },
  modes: {
    dark: {},
  },
};

export default {
  colors,
  typographyVariants,
  breakpoints: {
    xs: 0,
    sm: 480,
    md: 768,
    lg: 992,
    xl: 1200,
  },
  fontFamily: '\'Fira Sans Condensed\', sans-serif',
  borderRadius: '16px',
};
