import { GET_USER, GET_USER_SUCCESS, GET_USER_FAILED, GET_USER_RESET_DATA } from "../../utils/constants.js";

const initialState = {
  getUserRequest: false,
  getUserFailed: false,
  getUserData: undefined,
  successGetUser: false
}

export const getUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER: {
      return {
        ...state,
        getUserRequest: true,
        getUserFailed: false,
        getUserData: undefined,
        successGetUser: false
      };
    }
    case GET_USER_SUCCESS: {
      return { 
        ...state,
        getUserRequest: false, 
        getUserFailed: false,
        getUserData: action.user,
        successGetUser: action.success
      };
    }
    case GET_USER_FAILED: {
      return { 
        ...state, 
        getUserRequest: false,
        getUserFailed: true, 
        getUserData: undefined, 
        successGetUser: false
      };
    }
    case GET_USER_RESET_DATA: {
      return { 
        ...state, 
        getUserRequest: false,
        getUserFailed: false, 
        getUserData: undefined,
        successGetUser: false
      };
    }
    default: {
      return state
    }
  }

} 