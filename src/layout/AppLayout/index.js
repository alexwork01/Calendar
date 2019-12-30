import React from 'react';
import Header from '../../ui-kit/Header';
import Footer from '../../ui-kit/Footer';

export default ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);
