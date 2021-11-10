import { SET_CURRENT_USER, LOG_IN } from './user.types';
import api from '../../api/base.api';

const UserActions = {
  setCurrentUser: id => dispatch => 
    api.get(`/user/${id}`)
      .then(currentUser => dispatch({ type: SET_CURRENT_USER, currentUser })),

  logIn: (username, password) => dispatch =>
    api.post(`/user/login`, { username, password })
      .then(response => response.data)
      .then(currentUser => dispatch({ type: LOG_IN, currentUser })),
};

export default UserActions;