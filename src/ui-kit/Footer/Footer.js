import { Image } from 'semantic-ui-react';
import React from 'react';

import gitHubImg from '../../assets/GitHub-Mark-Light-32px.png';
import { StyledLink, StyledTitle, FooterWrapper } from './styled';

const Footer = () => (
  <FooterWrapper inverted vertical>
    <StyledLink target="_blank" href="https://github.com/alexwork01/Calendar">
      <Image src={gitHubImg} />
      <StyledTitle inverted as="h3">
        GitHub repository
      </StyledTitle>
    </StyledLink>
  </FooterWrapper>
);

export default Footer;
