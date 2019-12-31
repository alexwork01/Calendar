import { Image } from 'semantic-ui-react';
import React from 'react';

import gitHubImg from '../../assets/GitHub-Mark-Light-32px.png';
import { StyledLink, LinkWrapper, StyledTitle, FooterWrapper } from './styled';

const Footer = () => (
  <FooterWrapper inverted vertical>
    <LinkWrapper>
      <Image src={gitHubImg} />
      <StyledTitle as="h3">
        <StyledLink
          target="_blank"
          href="https://github.com/alexwork01/Calendar"
        >
          GitHub repository
        </StyledLink>
      </StyledTitle>
    </LinkWrapper>
  </FooterWrapper>
);

export default Footer;
