import { LOGOUT_USER, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAILED, LOGOUT_USER_RESET_DATA } from "../const";  
import { TInitialState, TLogoutUserActions } from "../types/user-logout";

const initialState: TInitialState = {
  logoutRequest: false,
  logoutFailed: false,
  logoutSuccess: false,
  logoutMessage: ""
}

export const logoutUserReducer = (state = initialState, action: TLogoutUserActions): TInitialState => {
  switch (action.type) {
    case LOGOUT_USER: {
      return {
        ...state,
        logoutRequest: true,
        logoutFailed: false,
        logoutSuccess: false,
        logoutMessage: ""
      };
    }
    case LOGOUT_USER_SUCCESS: {
      return { 
        ...state, 
        logoutRequest: false, 
        logoutFailed: false,
        logoutSuccess: action.success,
        logoutMessage: action.message 
      };
    }
    case LOGOUT_USER_FAILED: {
      return { 
        ...state,  
        logoutRequest: false,
        logoutFailed: true,
        logoutSuccess: false,
        logoutMessage: "" 
      };
    }
    case LOGOUT_USER_RESET_DATA: {
      return { 
        ...state, 
        logoutFailed: false, 
        logoutRequest: false,
        logoutSuccess: false,
        logoutMessage: "" 
      };
    }
    default: {
      return state
    }
  }

} 