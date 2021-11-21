import {
  SET_CURRENT_USER,
  LOG_IN,
  LOG_IN_ERROR,
  SIGN_UP,
  SIGN_UP_ERROR,
  RESOLVE_ERROR
} from './user.types';

const initialState = {
  currentUser: null,
  errorType: null,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
    case LOG_IN:
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.currentUser,
      };

    case LOG_IN_ERROR:
    case SIGN_UP_ERROR:
      return {
        ...state,
        errorType: action.errorMessage,
      }

    case RESOLVE_ERROR:
      return {
        ...state,
        errorType: null,
      }

    default: 
      return state;
  }
};

export default userReducer;