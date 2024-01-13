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
        updateUserFailed: false
      };
    }
    case UPDATE_USER_SUCCESS: {
      return { 
        ...state,
        successUpdateUser: action.success, 
        updateUserData: action.user,
        updateUserRequest: false, 
        updateUserFailed: false 
      };
    }
    case UPDATE_USER_FAILED: {
      return { 
        ...state, 
        updateUserFailed: true, 
        updateUserRequest: false,
        successUpdateUser: false 
      };
    }
    case UPDATE_USER_RESET_DATA: {
      return { 
        ...state, 
        updateUserFailed: false, 
        updateUserRequest: false,
        successUpdateUser: false,
        updateUserData: undefined 
      };
    }
    default: {
      return state
    }
  }

} 