const colors = {
  grey100: '#f5f5f5',
  grey200: '#eeeeee',
  grey300: '#e0e0e0',
  grey500: '#9e9e9e',
  grey800: '#424242',
  grey900: '#212121',

  blueGrey50: '#eceff1',
  blueGrey100: '#cfd8dc',
  blueGrey300: '#90a4ae',
  blueGrey500: '#607d8b',
  blueGrey600: '#546e7a',
  blueGrey800: '#37474f',
  blueGrey900: '#263238',

  red600: '#e53935',

  lightBlue200: '#81d4fa',
  lightBlue300: '#4fc3f7',
  lightBlue400: '#29b6f6',

  blue300: '#64b5f6',
  blue400: '#42a5f5',
  blue500: '#2196f3',
  blue700: '#1976d2',

  cyan200: '#80deea',

  tealA200: '#6df9b6',
  tealA400: '#1de9b6',
  tealA700: '#00bfa5',
  teal500: '#009688',

  green600: '#43a047',

  yellow600: '#fdd835',
};

export default {
  border: {
    divider: `1px solid ${colors.grey200}`,
  },
  colors: {
    bg: '#fff',
    text: colors.grey800,
    primary: colors.tealA700,
    primaryAlt: colors.teal500,
    secondary: colors.tealA700,
    danger: colors.red600,
    info: colors.blue700,
    success: colors.green600,
    sub: colors.grey300,
    disabled: colors.grey300,
    disabledText: colors.grey500,
    placeholder: colors.blueGrey600,
    link: colors.blue500,
    linkHover: colors.tealA700,
    label: colors.blueGrey600,
    input: {
      border: {
        disabled: colors.grey100,
        normal: colors.lightBlue200,
        hover: colors.blue300,
      },
    },
    button: {
      primary: {
        bgColor1: colors.tealA400,
        bgColor2: 'rgba(0,191,165,1)',
        textColor: 'white',
      },
      secondary: {
        bgColor: colors.blueGrey50,
        textColor: colors.blueGrey500
      }
    }
  },
  shadows: {
    xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    outline: `0 0 0 2px ${colors.tealA200}`,
  },
  spacing: {
    md: '0.8rem',
  },
  gutter: {
    grid: '15px',
    form: '8px',
    section: '30px',
  },
  fontSizes: {
    sm: '.88rem',
    md: '1rem',
    lg: '.98rem',
    xl: '.98rem',
  },
}