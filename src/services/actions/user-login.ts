import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED, LOGIN_USER_RESET_DATA } from "../const";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../utils/constants"; 
import { TRequestLoginUserData, TResponseLoginUserData, ILoginUserAction, ILoginUserSuccessAction, ILoginUserFailedAction, 
  ILoginUserResetDataAction } from "../types/user-login"; 
import { loginApi } from "../../utils/api";
import { setCookie } from "../../utils/cookie";
import { AppDispatch } from "../types/types";

// генераторы экшенов
const loginUserFeed = (): ILoginUserAction => ({
  type: LOGIN_USER
});

const loginUserSuccess = (success: boolean, user: TResponseLoginUserData): ILoginUserSuccessAction => ({
  type: LOGIN_USER_SUCCESS,
  success,
  user
});

const loginUserFailed = (): ILoginUserFailedAction => ({
  type: LOGIN_USER_FAILED
});

const resetData = (): ILoginUserResetDataAction => ({
  type: LOGIN_USER_RESET_DATA
});

export function loginUser(userData: TRequestLoginUserData) {
  
  return function (dispatch: AppDispatch) {
    dispatch(loginUserFeed());
    loginApi(userData)
    .then((res) => {  
      if (res && res.success) {
        res.accessToken && setCookie(ACCESS_TOKEN, res.accessToken.split('Bearer ')[1]);
        res.refreshToken && localStorage.setItem(REFRESH_TOKEN, res.refreshToken);
        dispatch(loginUserSuccess(res.success, res.user));
      } else {
        dispatch(loginUserFailed());
      }
    }).catch((err) => {
      dispatch(loginUserFailed());
      console.log(err);
    }) 
  }

}

export function resetLoginUserData(): ILoginUserResetDataAction { 
  return (resetData());
}