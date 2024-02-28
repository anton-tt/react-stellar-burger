import { GET_USER, GET_USER_SUCCESS, GET_USER_FAILED, GET_USER_RESET_DATA } from "../const";
import { TInitialState, TGetUserActions } from "../types/user-get";

const initialState: TInitialState = {
  getUserRequest: false,
  getUserFailed: false,
  getUserData: undefined,
  getUserSuccess: false
}

export const getUserReducer = (state = initialState, action: TGetUserActions): TInitialState => {
  switch (action.type) {
    case GET_USER: {
      return {
        ...state,
        getUserRequest: true,
        getUserFailed: false,
        getUserData: undefined,
        getUserSuccess: false
      };
    }
    case GET_USER_SUCCESS: {
      return { 
        ...state,
        getUserRequest: false, 
        getUserFailed: false,
        getUserData: action.user,
        getUserSuccess: action.success
      };
    }
    case GET_USER_FAILED: {
      return { 
        ...state, 
        getUserRequest: false,
        getUserFailed: true, 
        getUserData: undefined, 
        getUserSuccess: false
      };
    }
    case GET_USER_RESET_DATA: {
      return { 
        ...state, 
        getUserRequest: false,
        getUserFailed: false, 
        getUserData: undefined,
        getUserSuccess: false
      };
    }
    default: {
      return state
    }
  }

} 