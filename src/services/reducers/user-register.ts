import { REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAILED, REGISTER_USER_RESET_DATA } from "../const";
import { TInitialState, TRegisterUserActions } from "../types/user-register";

const initialState: TInitialState = {
  registerRequest: false,
  registerFailed: false,
  userData: undefined,
  registerSuccess: false
}

export const registerUserReducer = (state = initialState, action: TRegisterUserActions): TInitialState => {
  switch (action.type) {
    case REGISTER_USER: {
      return {
        ...state,
        registerRequest: true,
        registerFailed: false,
        userData: undefined,
        registerSuccess: false
      };
    }
    case REGISTER_USER_SUCCESS: {
      return { 
        ...state,
        registerRequest: false, 
        registerFailed: false,
        userData: action.user,
        registerSuccess: action.success 
      };
    }
    case REGISTER_USER_FAILED: {
      return { 
        ...state, 
        registerRequest: false,
        registerFailed: true, 
        userData: undefined,
        registerSuccess: false 
      };
    }
    case REGISTER_USER_RESET_DATA: {
      return { 
        ...state, 
        registerFailed: false, 
        registerRequest: false,
        userData: undefined,
        registerSuccess: false 
      };
    }
    default: {
      return state
    }
  }

} 