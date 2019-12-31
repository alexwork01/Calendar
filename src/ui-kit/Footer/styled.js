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
  color: ${props => props.theme.textSecondary};
  text-decoration: underline;

  &:hover {
    color: ${props => props.theme.textSecondary};
    cursor: pointer;
    text-decoration: none;
  }

  &:visited {
    color: ${props => props.theme.textSecondary};
  }
`;

export const StyledTitle = styled(Header)`
  margin: 0 0 0 1em;
`;
