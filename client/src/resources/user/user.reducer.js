import Guest from "../../constants/defaultUser";
import { SET_CURRENT_USER } from "./user.types";

const initialState = {
  currentUser: Guest,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER: {
      return {
        ...state,
        currentUser: action.currentUser,
      };
    }
    default: 
      return state;
  }
};

export default userReducer;