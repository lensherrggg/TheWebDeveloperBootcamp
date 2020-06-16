import { LOAD_CAMPGROUNDS, REMOVE_CAMPGROUNDS } from '../actionTypes';

const campgrounds = (state = [], action) => {
  switch (action.type) {
    case LOAD_CAMPGROUNDS: 
      return [...action.campgrounds];
    default: return state;
  }
};

export default campgrounds;