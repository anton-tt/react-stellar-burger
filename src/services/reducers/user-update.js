import { UPDATE_USER, UPDATE_USER_SUCCESS, UPDATE_USER_FAILED, UPDATE_USER_RESET_DATA } from "../../utils/constants.js";

const initialState = {
  updateUserRequest: false,
  updateUserFailed: false,
  updateUserData: undefined,
  successUpdateUser: false
}

export const updateUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER: {
      return {
        ...state,
        updateUserRequest: true,
        updateUserFailed: false,
        updateUserData: undefined,
        successUpdateUser: false
      };
    }
    case UPDATE_USER_SUCCESS: {
      return { 
        ...state,
        updateUserRequest: false, 
        updateUserFailed: false, 
        updateUserData: action.user,
        successUpdateUser: action.success 
      };
    }
    case UPDATE_USER_FAILED: {
      return { 
        ...state, 
        updateUserRequest: false,
        updateUserFailed: true, 
        updateUserData: undefined,
        successUpdateUser: false
      };
    }
    case UPDATE_USER_RESET_DATA: {
      return { 
        ...state, 
        updateUserRequest: false,
        updateUserFailed: false, 
        updateUserData: undefined, 
        successUpdateUser: false
      };
    }
    default: {
      return state
    }
  }

} 