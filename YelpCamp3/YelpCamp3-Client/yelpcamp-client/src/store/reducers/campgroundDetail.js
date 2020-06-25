import { LOAD_CAMPGROUND_DETAIL } from '../actionTypes';

const campgroundDetail = (state = {}, action) => {
  switch (action.type) {
    case LOAD_CAMPGROUND_DETAIL:
      return action.campgroundDetail;
    default: return state;
  }
};

export default campgroundDetail;