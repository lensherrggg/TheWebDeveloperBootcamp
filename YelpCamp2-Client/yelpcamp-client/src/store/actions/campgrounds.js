import { apiCall } from '../../services/api';
import { LOAD_CAMPGROUNDS, REMOVE_CAMPGROUNDS } from '../actionTypes';
import { addError } from './errors';

export const loadCampgrounds = campgrounds => ({
  type: LOAD_CAMPGROUNDS,
  campgrounds
});

export const fetchCampgrounds = () => {
  return dispatch => {
    return apiCall('get', '/api/campgrounds')
      .then(res => {
        dispatch(loadCampgrounds(res));
      })
      .catch(err => {
        dispatch(addError(err.message));
      })
  };
};