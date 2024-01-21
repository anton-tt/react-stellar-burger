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
        loginFailed: false,
        userData: undefined,
        successLogin: false
      };
    }
    case LOGIN_USER_SUCCESS: {
      return { 
        ...state,
        loginRequest: false, 
        loginFailed: false, 
        userData: action.user,
        successLogin: action.success 
      };
    }
    case LOGIN_USER_FAILED: {
      return { 
        ...state, 
        loginRequest: false,
        loginFailed: true, 
        userData: undefined,
        successLogin: false 
      };
    }
    case LOGIN_USER_RESET_DATA: {
      return { 
        ...state, 
        loginRequest: false,
        loginFailed: false, 
        userData: undefined,
        successLogin: false 
      };
    }
    default: {
      return state
    }
  }

} 