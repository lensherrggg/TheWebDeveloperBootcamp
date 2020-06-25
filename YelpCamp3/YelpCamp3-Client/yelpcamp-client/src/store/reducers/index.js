import { combineReducers } from 'redux';
import currentUser from './currentUser';
import errors from './errors';
import campgrounds from './campgrounds';
import campgroundDetail from './campgroundDetail';
import comments from './comments';
import location from './location';

const rootReducer = combineReducers({
  currentUser,
  errors,
  campgrounds,
  campgroundDetail,
  comments,
  location
});

export default rootReducer;