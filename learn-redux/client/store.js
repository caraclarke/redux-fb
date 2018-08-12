import { createStore, compose } from 'redux';
import { syncHistoryWithStore } with 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

// default data
import comments from './data/comments';
import posts from './data/posts';

// create object for the default data
const defaultState = {
  posts,
  comments
};

// CS takes root reducer (how to interface with it) & default state
const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;