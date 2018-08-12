// actions are just objects with type & necessary information

// increment (likes on photo)
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  };
}

// add comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  };
}

// remove comment
export function removeComment(postId, index) { // comment index
  return {
    type: 'REMOVE_COMMENT',
    postId,
    index
  };
}
