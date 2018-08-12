// increment (likes on photo)
function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }; // actions are just objects with type & necessary information
}

// add comment
function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  };
}

// remove comment
function removeComment(postId, index) { // comment index
  return {
    type: 'REMOVE_COMMENT',
    postId,
    index
  };
}
