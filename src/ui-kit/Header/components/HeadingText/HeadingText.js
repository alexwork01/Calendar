import React, { useState, useEffect } from 'react';
import { Transition } from 'semantic-ui-react';

import { HeadingTitle, HeadingWrapper, HeadingMessage } from './styled';

export const HeadingText = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => setVisible(true), 300);

    return () => clearTimeout(delay);
  }, []);

  return (
    <HeadingWrapper>
      <Transition.Group animation="slide down" duration={500}>
        {visible && <HeadingTitle as="h1">Calendar</HeadingTitle>}
      </Transition.Group>
      <Transition.Group animation="slide right" duration={1000}>
        {visible && (
          <HeadingMessage as="h2">
            Calendar of birth dates - test challenge for Yalantis React.js
            School
          </HeadingMessage>
        )}
      </Transition.Group>
    </HeadingWrapper>
  );
};
