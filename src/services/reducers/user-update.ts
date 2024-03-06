import { UPDATE_USER, UPDATE_USER_SUCCESS, UPDATE_USER_FAILED, UPDATE_USER_RESET_DATA } from "../const";
import { TInitialState, TUpdateUserActions } from "../types/user-update";

const initialState: TInitialState = {
  updateUserRequest: false,
  updateUserFailed: false,
  updateUserData: undefined,
  updateUserSuccess: false
}

export const updateUserReducer = (state = initialState, action: TUpdateUserActions): TInitialState => {
  switch (action.type) {
    case UPDATE_USER: {
      return {
        ...state,
        updateUserRequest: true,
        updateUserFailed: false,
        updateUserData: undefined,
        updateUserSuccess: false
      };
    }
    case UPDATE_USER_SUCCESS: {
      return { 
        ...state,
        updateUserRequest: false, 
        updateUserFailed: false, 
        updateUserData: action.user,
        updateUserSuccess: action.success 
      };
    }
    case UPDATE_USER_FAILED: {
      return { 
        ...state, 
        updateUserRequest: false,
        updateUserFailed: true, 
        updateUserData: undefined,
        updateUserSuccess: false
      };
    }
    case UPDATE_USER_RESET_DATA: {
      return { 
        ...state, 
        updateUserRequest: false,
        updateUserFailed: false, 
        updateUserData: undefined, 
        updateUserSuccess: false
      };
    }
    default: {
      return state
    }
  }

} 