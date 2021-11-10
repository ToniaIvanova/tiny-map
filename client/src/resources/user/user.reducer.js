import { LOG_IN, SET_CURRENT_USER } from "./user.types";

const initialState = {
  currentUser: null,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.currentUser,
      };
    default: 
      return state;
  }
};

export default userReducer;