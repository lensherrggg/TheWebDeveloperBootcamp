import { LOAD_LOCATION } from '../actionTypes';

const location = (state = {}, action) => {
  switch (action.type) {
    case LOAD_LOCATION:
      return action.location;
    default: return state;
  }
};

export default location;