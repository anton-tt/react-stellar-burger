import { REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAILED, REGISTER_USER_RESET_DATA } from "../const";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../utils/constants";
import { TRequestUserData, TResponseUserData, IRegisterUserAction, IRegisterUserSuccessAction, IRegisterUserFailedAction, 
  IRegisterUserResetDataAction } from "../types/user-register"; 
import { registerApi } from "../../utils/api.jsx";
import { setCookie } from "../../utils/cookie.js";
import { AppDispatch } from "../types/types";

const registerUserFeed = (): IRegisterUserAction => ({
  type: REGISTER_USER
});

const registerUserSuccess = (success: boolean, user: TResponseUserData): IRegisterUserSuccessAction => ({
  type: REGISTER_USER_SUCCESS,
  success,
  user
});

const registerUserFailed = (): IRegisterUserFailedAction => ({
  type: REGISTER_USER_FAILED
});

const resetData = (): IRegisterUserResetDataAction => ({
  type: REGISTER_USER_RESET_DATA
});

export function registerUser(userData: TRequestUserData) {
  
  return function (dispatch: AppDispatch) {
    dispatch(registerUserFeed());
    registerApi(userData)
    .then((res) => {  
      if (res && res.success) {
        setCookie(ACCESS_TOKEN, res.accessToken.split('Bearer ')[1]);
        localStorage.setItem(REFRESH_TOKEN, res.refreshToken);
        dispatch(registerUserSuccess(res.success, res.user));
      } else {
        dispatch(registerUserFailed());
      }
    }).catch((err) => {
      dispatch(registerUserFailed());
      console.log(err);
    }) 
  }

}

export function resetRegisterUserData() { 
  return (resetData());
}