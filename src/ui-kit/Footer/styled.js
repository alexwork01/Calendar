import styled from 'styled-components';
import { Header, Segment } from 'semantic-ui-react';

export const FooterWrapper = styled(Segment)`
  height: 12em;
  padding: 5em 0 0 0 !important;
`;

export const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const StyledTitle = styled(Header)`
  margin: 0 0 0 1em;
  color: #fff;
`;
