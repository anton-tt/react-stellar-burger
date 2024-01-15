import { LOGOUT_USER, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAILED, LOGOUT_USER_RESET_DATA } from "../../utils/constants.js";

const initialState = {
  logoutRequest: false,
  logoutFailed: false,
  successLogout: false,
  successMessage: ""
}

export const logoutUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT_USER: {
      return {
        ...state,
        logoutRequest: true,
        logoutFailed: false,
        successLogout: false,
        successMessage: ""
      };
    }
    case LOGOUT_USER_SUCCESS: {
      return { 
        ...state, 
        logoutRequest: false, 
        logoutFailed: false,
        successLogout: action.success,
        successMessage: action.message 
      };
    }
    case LOGOUT_USER_FAILED: {
      return { 
        ...state,  
        logoutRequest: false,
        logoutFailed: true,
        successLogout: false,
        successMessage: "" 
      };
    }
    case LOGOUT_USER_RESET_DATA: {
      return { 
        ...state, 
        logoutFailed: false, 
        logoutRequest: false,
        successLogout: false,
        successMessage: "" 
      };
    }
    default: {
      return state
    }
  }

} 