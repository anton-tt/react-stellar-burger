import { REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAILED, REGISTER_USER_RESET_DATA } from "../../utils/constants.js";

const initialState = {
  registerRequest: false,
  registerFailed: false,
  userData: undefined,
  successRegister: false
}

export const registerUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER: {
      return {
        ...state,
        registerRequest: true,
        registerFailed: false,
        userData: undefined,
        successRegister: false
      };
    }
    case REGISTER_USER_SUCCESS: {
      return { 
        ...state,
        registerRequest: false, 
        registerFailed: false,
        userData: action.user,
        successRegister: action.success 
      };
    }
    case REGISTER_USER_FAILED: {
      return { 
        ...state, 
        registerRequest: false,
        registerFailed: true, 
        userData: undefined,
        successRegister: false 
      };
    }
    case REGISTER_USER_RESET_DATA: {
      return { 
        ...state, 
        registerFailed: false, 
        registerRequest: false,
        userData: undefined,
        successRegister: false 
      };
    }
    default: {
      return state
    }
  }

} 