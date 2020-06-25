import { LOAD_CAMPGROUNDS, REMOVE_CAMPGROUND } from '../actionTypes';

const campgrounds = (state = [], action) => {
  switch (action.type) {
    case LOAD_CAMPGROUNDS: 
      return [...action.campgrounds];
    case REMOVE_CAMPGROUND:
      return state.filter(campground => campground._id !== action.id);
    default: return state;
  }
};

export default campgrounds;