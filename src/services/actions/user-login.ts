import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED, LOGIN_USER_RESET_DATA } from "../const";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../utils/constants.js"; 
import { TRequestUserData, TResponseUserData, ILoginUserAction, ILoginUserSuccessAction, ILoginUserFailedAction, 
  ILoginUserResetDataAction } from "../types/user-login"; 
import { loginApi } from "../../utils/api.jsx";
import { setCookie } from "../../utils/cookie.js";
import { AppDispatch } from "../types/types";

// Генераторы экшенов
export const loginUserFeed = (): ILoginUserAction => ({
  type: LOGIN_USER
});

export const loginUserSuccess = (success: boolean, user: TResponseUserData): ILoginUserSuccessAction => ({
  type: LOGIN_USER_SUCCESS,
  success,
  user
});

export const loginUserFailed = (): ILoginUserFailedAction => ({
  type: LOGIN_USER_FAILED
});

export const loginUserResetData = (): ILoginUserResetDataAction => ({
  type: LOGIN_USER_RESET_DATA
});

export function loginUser(userData: TRequestUserData) {
  
  return function (dispatch: AppDispatch) {
    dispatch(loginUserFeed());
    loginApi(userData)
    .then((res) => {  
      if (res && res.success) {
        setCookie(ACCESS_TOKEN, res.accessToken.split('Bearer ')[1]);
        localStorage.setItem(REFRESH_TOKEN, res.refreshToken);
        dispatch(loginUserSuccess(res.success, res.user));
      } else {
        dispatch({type: LOGIN_USER_FAILED});
      }
    }).catch((err) => {
      dispatch(loginUserFailed());
      console.log(err);
    }) 
  }

}

export function resetLoginUserData(): ILoginUserResetDataAction { 
  return (loginUserResetData());
}