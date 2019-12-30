import styled, { keyframes } from 'styled-components';
import { Segment } from 'semantic-ui-react';
import bgImage from '../../assets/bg.jpg';

const gradientBG = keyframes`
     0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
`;

const slideInUp = keyframes`   
  from {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);  
}
`;

export const HeaderWrapper = styled(Segment)`
  position: relative;
  background: ${props => props.theme.backgroundDefault}!important;
  min-height: 22em;
  padding: 0 0 0 0;
  border: 0 !important;
  border-width: 0 !important;

  @media (min-width: 768px) {
    min-height: 44em;
  }
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.3;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: scroll;
`;

export const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.7;
  background: ${props => props.theme.header.bg};
  background-size: 400% 400%;
  animation: ${gradientBG} 15s ease infinite;
`;

export const MediaWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  max-height: 20em;
  overflow: hidden;
  margin-bottom: -1em;

  @media (min-width: 768px) {
    max-height: 44em;
  }
`;

export const ImageContainer = styled.div`
  max-width: 420px;
  width: 80%;
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
  animation: ${slideInUp} 500ms ease 500ms both;
`;
