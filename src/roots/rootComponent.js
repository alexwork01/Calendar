import React from 'react';
import { Route } from 'react-router-dom';

// Styling
import AppLayout from '../layout/AppLayout';

// Components
import Home from '../routes/Home';

export default () => (
  <AppLayout>
    <Route path="/" component={Home} />
  </AppLayout>
);
