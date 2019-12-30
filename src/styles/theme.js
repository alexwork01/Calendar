import createTheme from 'styled-components-theme';

const colors = {
  white: '#ffffff',
  whiteTransparent: 'rgba(255,255,255,.8)',
  black: 'rgba(0,0,0,.8)',

  red: '#DE2A28',
  blue: '#3885D0',
  grey: '#767676',
  green: '#4FBA45'
};

const gradients = {
  bg: `linear-gradient(106.9deg, #3885d0 20%, #4fba45 80%)`,
  playingWithReds: 'linear-gradient(to bottom, #d31027, #ea384d)',
  metallicToad: 'linear-gradient(to bottom, #abbaab, #e3e3e3)',
  mojito: 'linear-gradient(to bottom, #1d976c, #25c28b)'
};

export const themeConfig = {
  textDefault: colors.black,
  textSecondary: colors.white,
  textThird: colors.whiteTransparent,
  backgroundDefault: colors.white,
  backgroundRed: colors.red,
  backgroundGreen: colors.green
};

themeConfig.header = {
  bg: gradients.bg
};

themeConfig.month = {
  red: colors.red,
  blue: colors.blue,
  grey: colors.grey,
  green: colors.green
};

const theme = createTheme(...Object.keys(themeConfig));
export default theme;
