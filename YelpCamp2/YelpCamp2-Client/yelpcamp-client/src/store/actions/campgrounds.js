import { apiCall } from '../../services/api';
import { LOAD_CAMPGROUNDS, LOAD_CAMPGROUND_DETAIL, LOAD_COMMENTS, REMOVE_CAMPGROUND, REMOVE_COMMENT, ADD_COMMENT } from '../actionTypes';
import { addError } from './errors';

export const loadCampgrounds = campgrounds => ({
  type: LOAD_CAMPGROUNDS,
  campgrounds
});

export const loadCampgroundDetail = campgroundDetail => ({
  type: LOAD_CAMPGROUND_DETAIL,
  campgroundDetail
})

export const loadComments = comments => ({
  type: LOAD_COMMENTS,
  comments
});

export const addComment = comment => ({
  type: ADD_COMMENT,
  comment
});

export const removeCamp = id => ({
  type: REMOVE_CAMPGROUND,
  id
});

export const removeComm = id => ({
  type: REMOVE_COMMENT,
  id
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

export const fetchCampgroundDetail = (user_id, campground_id) => {
  return dispatch => {
    return apiCall('get', `/api/users/${user_id}/campgrounds/${campground_id}`)
      .then(res => {
        dispatch(loadCampgroundDetail(res));
        dispatch(loadComments(res.comments));
      })
      .catch(err => {
        dispatch(addError(err.message));
      });
  }
}

export const fetchComments = (user_id, campground_id) => {
  return dispatch => {
    return apiCall('get', `/api/users/${user_id}/campgrounds/${campground_id}/comments`)
      .then(res => {
        dispatch(loadComments(res));
      })
      .catch(err => {
        dispatch(addError(err.message));
      });
  }
}

export const postNewCampground = (name, price, image, description) => (dispatch, getState) => {
  let { currentUser } = getState();
  const id = currentUser.user.id;
  return apiCall("post", `/api/users/${id}/campgrounds`, { name, price, image, description })
    .then(res => {})
    .catch(err => {
      addError(err.message);
    })
};

export const postNewComment = (text, campground_id) => (dispatch, getState) => {
  let { currentUser } = getState();
  const id = currentUser.user.id;
  return apiCall('post', `/api/users/${id}/campgrounds/${campground_id}/comments`, { text })
    .then(res => {
      dispatch(addComment(res));
    })
    .catch(err => {
      addError(err.message);
    });
};

export const removeCampground = (user_id, campground_id) => {
  return dispatch => {
    return apiCall('delete', `/api/users/${user_id}/campgrounds/${campground_id}`)
      .then(() => dispatch(removeCamp(campground_id)))
      .catch(err => addError(err.message));
  };
};

export const removeComment = (user_id, campground_id, comment_id) => {
  return dispatch => {
    return apiCall('delete', `/api/users/${user_id}/campgrounds/${campground_id}/comments/${comment_id}`)
      .then(() => dispatch(removeComm(comment_id)))
      .catch(err => addError(err.message));
  }
}