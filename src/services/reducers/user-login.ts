import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED, LOGIN_USER_RESET_DATA } from "../const";
import { TResponseUserData, TLoginUserActions } from "../types/user-login";

type TInitialState = {
  loginRequest: boolean;
  loginFailed: boolean;
  userData: TResponseUserData | undefined;
  loginSuccess: boolean;
}

const initialState: TInitialState = {
  loginRequest: false,
  loginFailed: false,
  userData: undefined,
  loginSuccess: false
}

export const loginUserReducer = (state = initialState, action: TLoginUserActions): TInitialState => {
  switch (action.type) {
    case LOGIN_USER: {
      return {
        ...state,
        loginRequest: true,
        loginFailed: false,
        userData: undefined,
        loginSuccess: false
      };
    }
    case LOGIN_USER_SUCCESS: {
      return { 
        ...state,
        loginRequest: false, 
        loginFailed: false, 
        userData: action.user,
        loginSuccess: action.success 
      };
    }
    case LOGIN_USER_FAILED: {
      return { 
        ...state, 
        loginRequest: false,
        loginFailed: true, 
        userData: undefined,
        loginSuccess: false 
      };
    }
    case LOGIN_USER_RESET_DATA: {
      return { 
        ...state, 
        loginRequest: false,
        loginFailed: false, 
        userData: undefined,
        loginSuccess: false 
      };
    }
    default: {
      return state
    }
  }

} 