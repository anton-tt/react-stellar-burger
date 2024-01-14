import { ACCESS_TOKEN, REFRESH_TOKEN, REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAILED, 
  REGISTER_USER_RESET_DATA } from "../../utils/constants.js";
import { registerApi } from "../../utils/api.jsx";
import { setCookie } from "../../utils/cookie.js";

export function registerUser(userData) {
  
  return function (dispatch) {
    dispatch({ type: REGISTER_USER });
    registerApi(userData)
    .then((res) => {  
      if (res && res.success) {
        setCookie(ACCESS_TOKEN, res.accessToken.split('Bearer ')[1]);
        localStorage.setItem(REFRESH_TOKEN, res.refreshToken);
        dispatch({ type: REGISTER_USER_SUCCESS,
          success: res.success, 
          user: res.user});
      } else {
        dispatch({type: REGISTER_USER_FAILED});
      }
    }).catch((err) => {
      dispatch({ type: REGISTER_USER_FAILED });
      console.log(err);
    }) 
  }

}

export function registerLoginUserData() { 
  return ({ type: REGISTER_USER_RESET_DATA });
}