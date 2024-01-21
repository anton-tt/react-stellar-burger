import { GET_USER, GET_USER_SUCCESS, GET_USER_FAILED, GET_USER_RESET_DATA } from "../../utils/constants.js";
import { getUserData } from "../../utils/apiWithAuthorization.jsx";

export function getUser() {
  
  return function (dispatch) {
    dispatch({ type: GET_USER });
    getUserData()
    .then((res) => {  
      if (res && res.success) {
        dispatch({ type: GET_USER_SUCCESS,
          success: res.success, 
          user: res.user});
      } else {
        dispatch({type: GET_USER_FAILED  
        });
      }
    }).catch((err) => {
      dispatch({ type: GET_USER_FAILED });
      console.log(err);
    }) 
  }

}

export function resetGetUserData() { 
  return ({ type: GET_USER_RESET_DATA });
}