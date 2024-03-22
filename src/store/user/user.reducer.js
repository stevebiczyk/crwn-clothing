import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = { currentUser: null };

export const userReducer = (state = INITIAL_STATE, action) => {
  //   console.log("dispatched action:");
  //   console.log(action);
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    // case "SIGN_OUT":
    //   return { currentUser: null };
    default:
      return state;
  }
};
