import { createGlobalStyle } from 'styled-components';
import { themeConfig } from './theme';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap');
   *{
     margin: 0;
     padding: 0;   
     box-sizing: border-box;
   }
  
  body {
    background: ${themeConfig.backgroundDefault};
    color: rgba(0,0,0,.8);
    font-family: 'Roboto';
    margin: 0;
  }
`;
