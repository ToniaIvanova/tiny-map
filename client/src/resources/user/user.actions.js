import {
  SET_CURRENT_USER,
  LOG_IN,
  LOG_IN_ERROR,
  SIGN_UP,
  SIGN_UP_ERROR,
  RESOLVE_ERROR,
} from './user.types';
import api from '../../common/base.api';

const UserActions = {
  setCurrentUser: id => async dispatch => {
    const response = await api.get(`/user/${id}`);
    const currentUser = response.data;
    return dispatch({ type: SET_CURRENT_USER, currentUser });
  },

  logIn: (username, password) => async dispatch => {
    const response = await api.post('/user/login', { username, password });
    const currentUser = response.data;
    if (currentUser.errorMessage) {
      return dispatch({ type: LOG_IN_ERROR, errorMessage: currentUser.errorMessage });
    }
    return dispatch({ type: LOG_IN, currentUser });
  },

  signUp: (username, password) => async dispatch => {
    const response = await api.post('/user/sign-up', { username, password });
    const currentUser = response.data;
    if (currentUser.errorMessage) {
      return dispatch({ type: SIGN_UP_ERROR, errorMessage: currentUser.errorMessage });
    }
    return dispatch({ type: SIGN_UP, currentUser });
  },

  resolveError: () => dispatch => dispatch({ type: RESOLVE_ERROR }),
};

export default UserActions;