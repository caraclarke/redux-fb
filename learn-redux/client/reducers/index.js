// root reducer
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import reducer files
import posts from './posts';
import comments from './comments';

// posts comments and url changes all live in state
const rootReducer = combineReducers({posts, comments, routing: routerReducer});

export default rootReducer;