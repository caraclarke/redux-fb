// this is like the run.js file in QB/QB
import React from 'react';
import { render } from 'react-dom';

// react router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// binding that lets us use redux with react
import { Provider } from 'react-redux';
import store, { history } from './store';

// components
import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

// import CSS
import css from './styles/style.styl';

// router
const router = ( // prov tag exposes store to application
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
);

// takes JSX and mounting point
render(
  router,
  document.getElementById('root')
);