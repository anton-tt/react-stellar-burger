import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../utils/constants";
import { UPDATE_TOKEN, UPDATE_TOKEN_SUCCESS, UPDATE_TOKEN_FAILED } from "../const";
import { IUpdateTokenAction, IUpdateTokenSuccessAction, IUpdateTokenFailedAction } from "../types/update-token";
import { updateToken } from "../../utils/apiWithAuthorization.jsx";
import { setCookie } from "../../utils/cookie.js";
import { AppDispatch } from "../types/types";

const updateTokenFeed = (): IUpdateTokenAction => ({
  type: UPDATE_TOKEN
});

const updateTokenSuccess = (success: boolean): IUpdateTokenSuccessAction => ({
  type: UPDATE_TOKEN_SUCCESS,
  success
});

const updateTokenFailed = (): IUpdateTokenFailedAction => ({
  type: UPDATE_TOKEN_FAILED
});

export function tokenUpdate() {
  
  return function (dispatch: AppDispatch) {
    dispatch(updateTokenFeed());
    updateToken()
    .then((res) => {  
      if (res && res.success) {
        setCookie(ACCESS_TOKEN, res.accessToken.split('Bearer ')[1]);
        localStorage.setItem(REFRESH_TOKEN, res.refreshToken);
        dispatch(updateTokenSuccess(res.success));
      } else {
        dispatch(updateTokenFailed());
      }
    }).catch((err) => {
      dispatch(updateTokenFailed());
      console.log(err);
    }) 
  }

}