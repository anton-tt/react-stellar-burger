import { UPDATE_USER, UPDATE_USER_SUCCESS, UPDATE_USER_FAILED, UPDATE_USER_RESET_DATA } from "../../utils/constants.js";
import { updateUserData } from "../../utils/apiWithAuthorization.jsx";

export function updateUser(userData) {
  
  return function (dispatch) {
    dispatch({ type: UPDATE_USER });
    updateUserData(userData)
    .then((res) => {  
      if (res && res.success) {
        dispatch({ type: UPDATE_USER_SUCCESS,
          success: res.success, 
          user: res.user});

          console.log(res);


      } else {
        dispatch({type: UPDATE_USER_FAILED});
      }
    }).catch((err) => {
      dispatch({ type: UPDATE_USER_FAILED });
      console.log(err);
    }) 
  }

}

export function resetUpdateUserData() { 
  return ({ type: UPDATE_USER_RESET_DATA });
}