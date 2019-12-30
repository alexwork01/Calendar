import React, { memo } from 'react';
import { Grid, Image } from 'semantic-ui-react';

import headerImg from '../../assets/iphone.png';
import { BackgroundWave, HeadingText } from './components';
import {
  BackgroundImage,
  BackgroundOverlay,
  HeaderWrapper,
  ImageContainer,
  MediaWrapper
} from './styled';

export default memo(() => (
  <HeaderWrapper textAlign="center" vertical>
    <BackgroundImage />
    <BackgroundOverlay />
    <Grid stackable>
      <Grid.Row>
        <Grid.Column width={8}>
          <HeadingText />
        </Grid.Column>
        <Grid.Column width={8}>
          <MediaWrapper>
            <ImageContainer>
              <Image src={headerImg} />
            </ImageContainer>
          </MediaWrapper>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <BackgroundWave />
  </HeaderWrapper>
));
