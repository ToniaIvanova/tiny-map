import {
  SET_CURRENT_USER,
  GET_PROFILE_BY_TOKEN,
  LOG_IN,
  LOG_IN_ERROR,
  SIGN_UP,
  SIGN_UP_ERROR,
  RESOLVE_ERROR,
  RATING,
} from './user.types';
import api from '../../common/base.api';

const UserActions = {
  setCurrentUser: id => async dispatch => {
    const response = await api.get(`/user/${id}`);
    const currentUser = response.data;
    return dispatch({ type: SET_CURRENT_USER, currentUser });
  },

  getProdileByToken: token => async dispatch => {
    if (!token) return;
    const response = await api.get('/user/profile', { headers: { "Authorization" : `Bearer ${token}` } });
    console.log({ response });
    const currentUser = response.data;
    if (currentUser.name) {
      return dispatch({ type: GET_PROFILE_BY_TOKEN, currentUser });
    }
  },

  logIn: (username, password) => async dispatch => {
    const response = await api.post('/user/login', { username, password });
    const currentUser = response.data;
    if (currentUser.errorMessage) {
      return dispatch({ type: LOG_IN_ERROR, errorMessage: currentUser.errorMessage });
    }
    if (currentUser.access_token) {
      localStorage.setItem('user-token', currentUser.access_token);
    }
    return dispatch({ type: LOG_IN, currentUser });
  },

  signUp: (username, password) => async dispatch => {
    const response = await api.post('/user/sign-up', { username, password });
    const currentUser = response.data;
    if (currentUser.errorMessage) {
      return dispatch({ type: SIGN_UP_ERROR, errorMessage: currentUser.errorMessage });
    }
    if (currentUser.access_token) {
      localStorage.setItem('user-token', currentUser.access_token);
    }
    return dispatch({ type: SIGN_UP, currentUser });
  },

  resolveError: () => dispatch => dispatch({ type: RESOLVE_ERROR }),

  getRating: () => async dispatch => {
    const response = await api.get('user/rating');
    const userRatings = response.data;
    return dispatch({ type: RATING, userRatings });
  }
};

export default UserActions;