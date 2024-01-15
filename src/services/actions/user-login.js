import { ACCESS_TOKEN, REFRESH_TOKEN, LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED, 
  LOGIN_USER_RESET_DATA } from "../../utils/constants.js";
import { loginApi } from "../../utils/api.jsx";
import { setCookie } from "../../utils/cookie.js";

export function loginUser(userData) {
  
  return function (dispatch) {
    dispatch({ type: LOGIN_USER });
    loginApi(userData)
    .then((res) => {  
      if (res && res.success) {
        setCookie(ACCESS_TOKEN, res.accessToken.split('Bearer ')[1]);
        localStorage.setItem(REFRESH_TOKEN, res.refreshToken);
        dispatch({ type: LOGIN_USER_SUCCESS,
          success: res.success, 
          user: res.user});
      } else {
        dispatch({type: LOGIN_USER_FAILED});
      }
    }).catch((err) => {
      dispatch({ type: LOGIN_USER_FAILED });
      console.log(err);
    }) 
  }

}

export function resetLoginUserData() { 
  return ({ type: LOGIN_USER_RESET_DATA });
}