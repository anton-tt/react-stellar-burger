import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED, LOGIN_USER_RESET_DATA } from "../../utils/constants.js";

const initialState = {
  loginRequest: false,
  loginFailed: false,
  userData: undefined,
  successLogin: false
}

export const loginUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER: {
      return {
        ...state,
        loginRequest: true,
        loginFailed: false
      };
    }
    case LOGIN_USER_SUCCESS: {
      return { 
        ...state,
        successLogin: action.success, 
        userData: action.user,
        loginRequest: false, 
        loginFailed: false 
      };
    }
    case LOGIN_USER_FAILED: {
      return { 
        ...state, 
        loginFailed: true, 
        loginRequest: false,
        successLogin: false 
      };
    }
    case LOGIN_USER_RESET_DATA: {
      return { 
        ...state, 
        loginFailed: false, 
        loginRequest: false,
        successLogin: false 
      };
    }
    default: {
      return state
    }
  }

} 