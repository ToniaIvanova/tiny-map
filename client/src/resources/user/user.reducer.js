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

const initialState = {
  currentUser: null,
  errorType: null,
  userRatings: null,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
    case GET_PROFILE_BY_TOKEN:
    case LOG_IN:
    case SIGN_UP:
      return {
        ...state,
        currentUser:{
          name: action.currentUser.name,
          _id: action.currentUser._id,
          isAdmin: action.currentUser.isAdmin,
        }
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
    
    case RATING:
      return {
        ...state,
        userRatings: action.userRatings,
      }

    default: 
      return state;
  }
};

export default userReducer;