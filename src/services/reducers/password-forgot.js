import { FORGOT_PASSWORD, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILED, FORGOT_PASSWORD_RESET_DATA } from "../../utils/constants.js";

const initialState = {
  forgotRequest: false,
  forgotFailed: false,
  successForgot: false,
  messageForgot: ""
}

export const forgotPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD: {
      return {
        ...state,
        forgotRequest: true,
        forgotFailed: false,
        successForgot: false,
        messageForgot: ""
      };
    }
    case FORGOT_PASSWORD_SUCCESS: {
      return { 
        ...state,
        successForgot: action.success,
        messageForgot: action.message, 
        forgotRequest: false, 
        forgotFailed: false 
      };
    }
    case FORGOT_PASSWORD_FAILED: {
      return { 
        ...state, 
        forgotFailed: true, 
        forgotRequest: false,
        successForgot: false,
        messageForgot: "" 
      };
    }
    case FORGOT_PASSWORD_RESET_DATA: {
      return { 
        ...state, 
        forgotRequest: false,
        forgotFailed: false, 
        successForgot: false,
        messageForgot: "" 
      };
    }
    default: {
      return state
    }
  }

} 