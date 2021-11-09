import { SET_CURRENT_USER } from './user.types';
import { BASE_URL } from '../../common/constants/baseURL';

const UserActions = {
  setCurrentUser: id => dispatch => 
    fetch(`${BASE_URL}/user/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    .then(response => response.json())
    .then(currentUser => dispatch({ type: SET_CURRENT_USER, currentUser })),
};

export default UserActions;