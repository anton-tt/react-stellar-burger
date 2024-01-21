import { ACCESS_TOKEN, REFRESH_TOKEN, UPDATE_TOKEN, UPDATE_TOKEN_SUCCESS, UPDATE_TOKEN_FAILED } from "../../utils/constants.js";
import { updateToken } from "../../utils/apiWithAuthorization.jsx";
import { setCookie } from "../../utils/cookie.js";

export function tokenUpdate() {
  
  return function (dispatch) {
    dispatch({ type: UPDATE_TOKEN });
    updateToken()
    .then((res) => {  
      if (res && res.success) {
        setCookie(ACCESS_TOKEN, res.accessToken.split('Bearer ')[1]);
        localStorage.setItem(REFRESH_TOKEN, res.refreshToken);
        dispatch({ type: UPDATE_TOKEN_SUCCESS,
          success: res.success 
        });
      } else {
        dispatch({type: UPDATE_TOKEN_FAILED});
      }
    }).catch((err) => {
      dispatch({ type: UPDATE_TOKEN_FAILED });
      console.log(err);
    }) 
  }

}