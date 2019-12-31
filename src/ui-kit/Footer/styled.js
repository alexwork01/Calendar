import styled from 'styled-components';
import { Header, Segment } from 'semantic-ui-react';

export const FooterWrapper = styled(Segment)`
  height: 12em;
  padding: 5em 0 0 0 !important;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled.a`
  color: #ffffff;
  text-decoration: underline;

  &:hover: {
    cursor: pointer;
    text-decoration: none;
  }
`;

export const StyledTitle = styled(Header)`
  margin: 0 0 0 1em;
`;
