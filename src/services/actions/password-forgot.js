import { FORGOT_PASSWORD, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILED, FORGOT_PASSWORD_RESET_DATA } from "../../utils/constants.js";
import { forgotApi } from "../../utils/api.jsx";

export function forgotPassword(userData) {
  
  return function (dispatch) {
    dispatch({ type: FORGOT_PASSWORD });
    forgotApi(userData)
    .then((res) => {  
      if (res && res.success) {
        dispatch({ type: FORGOT_PASSWORD_SUCCESS,
          success: res.success,
          message: res.message
        });
      } else {
        dispatch({type: FORGOT_PASSWORD_FAILED});
      }
    }).catch((err) => {
      dispatch({ type: FORGOT_PASSWORD_FAILED });
      console.log(err);
    }) 
  }

}

export function forgotPasswordResetData() { 
  return ({ type: FORGOT_PASSWORD_RESET_DATA });
}