import { UPDATE_TOKEN, UPDATE_TOKEN_SUCCESS,UPDATE_TOKEN_FAILED } from "../../utils/constants.js";

const initialState = {
  tokenRequest: false,
  tokenFailed: false,
  successUpdateToken: false
}

export const updateTokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TOKEN: {
      return {
        ...state,
        tokenRequest: true,
        tokenFailed: false,
        successUpdateToken: false
      };
    }
    case UPDATE_TOKEN_SUCCESS: {
      return { 
        ...state,
        tokenRequest: false, 
        tokenFailed: false, 
        successUpdateToken: action.success 
      };
    }
    case UPDATE_TOKEN_FAILED: {
      return { 
        ...state, 
        tokenRequest: false,
        tokenFailed: true, 
        successUpdateToken: false 
      };
    }
    default: {
      return state
    }
  }

} 