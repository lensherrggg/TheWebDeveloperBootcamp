import { LOAD_COMMENTS, ADD_COMMENT, REMOVE_COMMENT } from '../actionTypes';

const comments = (state = [], action) => {
  switch (action.type) {
    case LOAD_COMMENTS:
      return [...action.comments].reverse();
    case ADD_COMMENT:
      return [action.comment, ...state];
    case REMOVE_COMMENT:
      return state.filter(comment => comment._id !== action.id);
    default: return state;
  }
}

export default comments;