// Import Project Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Auto Import CSS/SCSS
require('fs').readdirSync('./css').map((file, key) => {
  require('./css/' + file);
});

// Router Dependencies
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';

// Store Dependencies
import configureStore from './store';
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

// Router
const router = (
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>
);

// Render to index.html HTML element
ReactDOM.render(
  router, document.getElementById('app')
);
