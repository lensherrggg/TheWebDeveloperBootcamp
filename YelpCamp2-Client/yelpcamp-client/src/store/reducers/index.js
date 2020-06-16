import { combineReducers } from 'redux';
import currentUser from './currentUser';
import errors from './errors';
import campgrounds from './campgrounds';

const rootReducer = combineReducers({
  currentUser,
  errors,
  campgrounds
});

export default rootReducer;