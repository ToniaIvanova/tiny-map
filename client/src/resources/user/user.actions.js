import { SET_CURRENT_USER } from './user.types';

const UserActions = {
  setCurrentUser: id => dispatch => 
    fetch(`http://localhost:3001/user/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    .then(response => response.json())
    .then(currentUser => dispatch({ type: SET_CURRENT_USER, currentUser })),
};

export default UserActions;