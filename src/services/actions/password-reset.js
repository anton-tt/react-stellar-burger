import { RESET_PASSWORD, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILED, RESET_PASSWORD_RESET_DATA } from "../../utils/constants.js";
import { resetApi } from "../../utils/api.jsx";

export function resetPassword(userData) {
  
  return function (dispatch) {
    dispatch({ type: RESET_PASSWORD });
    resetApi(userData)
    .then((res) => {  
      if (res && res.success) {
        dispatch({ type: RESET_PASSWORD_SUCCESS,
          success: res.success,
          message: res.message
        });
      } else {
        dispatch({type: RESET_PASSWORD_FAILED});
      }
    }).catch((err) => {
      dispatch({ type: RESET_PASSWORD_FAILED });
      console.log(err);
    }) 
  }

}

export function resetPasswordResetData() { 
  return ({ type: RESET_PASSWORD_RESET_DATA });
}