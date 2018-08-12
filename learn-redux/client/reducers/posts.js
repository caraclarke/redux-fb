// a reducer takes in 2 things
// 1. takes in the action (info about what happened)
// 2. takes in a copy of current state

// take in state, modify it and return state

function posts(state = [], action) {
  console.log(state, action);
  return state;
}

export default posts;