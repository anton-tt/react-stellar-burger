import { FORGOT_PASSWORD, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILED, FORGOT_PASSWORD_RESET_DATA } from "../const";
import { TInitialState, TForgotPasswordActions } from "../types/password-forgot";

const initialState: TInitialState = {
  forgotRequest: false,
  forgotFailed: false,
  forgotSuccess: false,
  forgotMessage: ""
}

export const forgotPasswordReducer = (state = initialState, action: TForgotPasswordActions): TInitialState => {
  switch (action.type) {
    case FORGOT_PASSWORD: {
      return {
        ...state,
        forgotRequest: true,
        forgotFailed: false,
        forgotSuccess: false,
        forgotMessage: ""
      };
    }
    case FORGOT_PASSWORD_SUCCESS: {
      return { 
        ...state,
        forgotRequest: false, 
        forgotFailed: false, 
        forgotSuccess: action.success,
        forgotMessage: action.message
      };
    }
    case FORGOT_PASSWORD_FAILED: {
      return { 
        ...state, 
        forgotRequest: false,
        forgotFailed: true, 
        forgotSuccess: false,
        forgotMessage: "" 
      };
    }
    case FORGOT_PASSWORD_RESET_DATA: {
      return { 
        ...state, 
        forgotRequest: false,
        forgotFailed: false, 
        forgotSuccess: false,
        forgotMessage: "" 
      };
    }
    default: {
      return state
    }
  }

} 