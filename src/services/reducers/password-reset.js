import { RESET_PASSWORD, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILED, RESET_PASSWORD_RESET_DATA } from "../../utils/constants.js";

const initialState = {
  resetRequest: false,
  resetFailed: false,
  successReset: false,
  messageReset: ""
}

export const resetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_PASSWORD: {
      return {
        ...state,
        resetRequest: true,
        resetFailed: false,
        successReset: false,
        messageReset: ""
      };
    }
    case RESET_PASSWORD_SUCCESS: {
      return { 
        ...state,
        successReset: action.success,
        messageReset: action.message, 
        resetRequest: false, 
        resetFailed: false 
      };
    }
    case RESET_PASSWORD_FAILED: {
      return { 
        ...state, 
        resetFailed: true, 
        resetRequest: false,
        successReset: false,
        messageReset: "" 
      };
    }
    case RESET_PASSWORD_RESET_DATA: {
      return { 
        ...state, 
        resetRequest: false,
        resetFailed: false, 
        successReset: false,
        messageReset: "" 
      };
    }
    default: {
      return state
    }
  }

} 