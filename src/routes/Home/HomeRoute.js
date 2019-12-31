import React, { memo, useEffect } from 'react';
import { Container } from 'semantic-ui-react';

import Calendar from '../../ui-kit/Calendar';
import Notification from '../../ui-kit/Notification';
import TopLoadingBar from '../../ui-kit/TopLoadingBar';

const HomeRoute = memo(props => {
  const { getPersonsRequest } = props;

  useEffect(() => {
    getPersonsRequest();
  }, []);

  return (
    <Container>
      <TopLoadingBar />
      <Notification />
      <Calendar />
    </Container>
  );
});

export default HomeRoute;
