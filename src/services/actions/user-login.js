import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED } from "../../utils/constants.js";
import { loginApi } from "../../utils/api.jsx";
import { setCookie } from "../../utils/cookie.js";

export function loginUser(userData) {
  
  return function (dispatch) {
    dispatch({ type: LOGIN_USER });
    loginApi(userData)
    .then((res) => {  
      if (res && res.success) {
        setCookie("accessToken", res.accessToken.split('Bearer ')[1]);
        localStorage.setItem("refreshToken", res.refreshToken);
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