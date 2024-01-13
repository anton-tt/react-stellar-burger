import { LOGOUT_USER, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAILED, LOGOUT_USER_RESET_DATA } from "../../utils/constants.js";

const initialState = {
  logoutRequest: false,
  logoutFailed: false,
  successLogout: false
}

export const logoutUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT_USER: {
      return {
        ...state,
        logoutRequest: true,
        logoutFailed: false
      };
    }
    case LOGOUT_USER_SUCCESS: {

console.log(action.user);

      return { 
        ...state,
        successLogout: action.success, 
        logoutRequest: false, 
        logoutFailed: false 
      };
    }
    case LOGOUT_USER_FAILED: {
      return { 
        ...state, 
        logoutFailed: true, 
        logoutRequest: false,
        successLogout: false 
      };
    }
    case LOGOUT_USER_RESET_DATA: {
      return { 
        ...state, 
        logoutFailed: false, 
        logoutRequest: false,
        successLogout: false 
      };
    }
    default: {
      return state
    }
  }

} 