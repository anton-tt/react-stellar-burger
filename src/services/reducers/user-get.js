import { GET_USER, GET_USER_SUCCESS, GET_USER_FAILED, GET_USER_RESET_DATA } from "../../utils/constants.js";

const defaultUserData = {
  name: "", 
  email: "", 
  password: ""
}



const initialState = {
  getUserRequest: false,
  getUserFailed: false,
  getUserData: undefined,//defaultUserData,//undefined,
  successGetUser: false
}

export const getUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER: {
      return {
        ...state,
        getUserRequest: true,
        getUserFailed: false
      };
    }
    case GET_USER_SUCCESS: {
      return { 
        ...state,
        successGetUser: action.success, 
        getUserData: action.user,
        getUserRequest: false, 
        getUserFailed: false 
      };
    }
    case GET_USER_FAILED: {
      console.log("GGGG");
      return { 
        ...state, 
        getUserFailed: true, 
        getUserRequest: false,
        successGetUser: false,
        getUserData: undefined 
      };
    }
    case GET_USER_FAILED: {
      return { 
        ...state, 
        getUserFailed: true, 
        getUserRequest: false,
        successGetUser: false,
        getUserData: undefined 
      };
    }

    case GET_USER_RESET_DATA: {
      console.log("GGGG");
      return { 
        ...state, 
        getUserFailed: false, 
        getUserRequest: false,
        successGetUser: false,
        getUserData: undefined 
      };
      
    }

    default: {
      return state
    }
  }

} 