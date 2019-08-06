/**
 * set up config before all code run
 */
import './config';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import createResa, { Provider } from 'resa';
import I18n from 'i18n-backend';

const app = createResa();

I18n.init({
  type: 'memory',
  locale: 'en',
  defaultNS: 'common',
  translation: require('./locale'),
});

const App = require('./App').default;
ReactDOM.render(
  <Provider resa={app}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
