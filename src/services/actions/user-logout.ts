import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../utils/constants.js";
import { LOGOUT_USER, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAILED, LOGOUT_USER_RESET_DATA } from "../const";
import { ILogoutUserAction, ILogoutUserSuccessAction, ILogoutUserFailedAction, 
  ILogoutUserResetDataAction } from "../types/user-logout";   
import { logoutApi } from "../../utils/api.jsx";
import { deleteCookie } from "../../utils/cookie.js";
import { AppDispatch } from "../types/types.js";

const logoutUserFeed = (): ILogoutUserAction => ({
  type: LOGOUT_USER
});

const logoutUserSuccess = (success: boolean, message: string): ILogoutUserSuccessAction => ({
  type: LOGOUT_USER_SUCCESS,
  success,
  message
});

const logoutUserFailed = (): ILogoutUserFailedAction => ({
  type: LOGOUT_USER_FAILED
});

const resetData = (): ILogoutUserResetDataAction => ({
  type: LOGOUT_USER_RESET_DATA
});

export function logoutUser() {
  
  return function (dispatch: AppDispatch) {
    dispatch(logoutUserFeed());
    logoutApi()
    .then((res) => {  
      if (res && res.success) {
        deleteCookie(ACCESS_TOKEN);
        localStorage.removeItem(REFRESH_TOKEN);
        dispatch(logoutUserSuccess(res.success, res.message));
      } else {
        dispatch(logoutUserFailed());
      }
    }).catch((err) => {
      dispatch(logoutUserFailed());
      console.log(err);
    }) 
  }

}

export function resetLogoutUserData() { 
  return (resetData());
}