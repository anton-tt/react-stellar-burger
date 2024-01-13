import { ACCESS_TOKEN, REFRESH_TOKEN, LOGOUT_USER, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAILED, LOGOUT_USER_RESET_DATA } from "../../utils/constants.js";
import { logoutApi } from "../../utils/api.jsx";
import { deleteCookie } from "../../utils/cookie.js";

export function logoutUser() {
  
  return function (dispatch) {
    dispatch({ type: LOGOUT_USER });
    logoutApi()
    .then((res) => {  
      if (res && res.success) {
        deleteCookie(ACCESS_TOKEN);
        localStorage.removeItem(REFRESH_TOKEN);
        dispatch({ type: LOGOUT_USER_SUCCESS,
          success: res.success });
      } else {
        dispatch({type: LOGOUT_USER_FAILED});
      }
    }).catch((err) => {
      dispatch({ type: LOGOUT_USER_FAILED });
      console.log(err);
    }) 
  }

}

export function resetLogoutUserData() { 
  return ({ type: LOGOUT_USER_RESET_DATA });
}