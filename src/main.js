import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import store from './store';
import GlobalStyle from './styles/global';
import { themeConfig } from './styles/theme';

const MOUNT_NODE = document.getElementById('root');

let render = async () => {
  const App = await import('./roots/rootComponent');

  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={themeConfig}>
        <Router>
          <div>
            <GlobalStyle />
            <App.default />
          </div>
        </Router>
      </ThemeProvider>
    </Provider>,
    MOUNT_NODE
  );
};

// Enable HMR
if (__DEV__) {
  if (module.hot) {
    const renderApp = render;
    render = () => {
      try {
        renderApp();
      } catch (e) {
        console.error(e); // eslint-disable-line
      }
    };
    module.hot.accept(['./roots/rootComponent'], () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE);
        render();
      })
    );
  }
}

render();
