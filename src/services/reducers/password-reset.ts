import { RESET_PASSWORD, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILED, RESET_PASSWORD_RESET_DATA } from "../const";
import { TInitialState, TResetPasswordActions } from "../types/password-reset";

const initialState: TInitialState = {
  resetRequest: false,
  resetFailed: false,
  resetSuccess: false,
  resetMessage: ""
}

export const resetPasswordReducer = (state = initialState, action: TResetPasswordActions): TInitialState => {
  switch (action.type) {
    case RESET_PASSWORD: {
      return {
        ...state,
        resetRequest: true,
        resetFailed: false,
        resetSuccess: false,
        resetMessage: ""
      };
    }
    case RESET_PASSWORD_SUCCESS: {
      return { 
        ...state,
        resetRequest: false, 
        resetFailed: false, 
        resetSuccess: action.success,
        resetMessage: action.message  
      };
    }
    case RESET_PASSWORD_FAILED: {
      return { 
        ...state, 
        resetRequest: false,
        resetFailed: true, 
        resetSuccess: false,
        resetMessage: "" 
      };
    }
    case RESET_PASSWORD_RESET_DATA: {
      return { 
        ...state, 
        resetRequest: false,
        resetFailed: false, 
        resetSuccess: false,
        resetMessage: "" 
      };
    }
    default: {
      return state
    }
  }

} 