// this is like the run.js file in QB/QB
import React from 'react';
import { render } from 'react-dom';

// react router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// components
import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

// import CSS
import css from './styles/style.styl';

// router
const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="/view/:postId" component={Single}></Route>
    </Route>
  </Router>
);

// takes JSX and mounting point
render(
  <Main />,
  document.getElementById('root')
);