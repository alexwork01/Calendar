import styled from 'styled-components';
import { Header } from 'semantic-ui-react';

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const HeadingTitle = styled(Header)`
  font-size: 5em;
  font-weight: 700;
  margin-bottom: 0;
  font-family: 'Poppins';
  letter-spacing: -3px;
  color: ${props => props.theme.textSecondary};

  @media (min-width: 768px) {
    font-size: 6em;
    margin-top: 1em !important;
  }
`;

export const HeadingMessage = styled(Header)`
  font-size: 1.8em;
  font-weight: normal;
  margin-top: 1.5em !important;
  color: ${props => props.theme.textThird};

  @media (min-width: 768px) {
    font-size: 2em;
  }
`;
