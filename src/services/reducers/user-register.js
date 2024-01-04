import { REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAILED } from "../../utils/constants.js";

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
        registerFailed: false
      };
    }
    case REGISTER_USER_SUCCESS: {
      return { 
        ...state,
        successRegister: action.success, 
        userData: action.user,
        registerRequest: false, 
        registerFailed: false 
      };
    }
    case REGISTER_USER_FAILED: {
      return { 
        ...state, 
        registerFailed: true, 
        registerRequest: false,
        successRegister: false 
      };
    }
    default: {
      return state
    }
  }

} 