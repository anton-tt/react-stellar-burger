import { RESET_PASSWORD, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILED, RESET_PASSWORD_RESET_DATA } from "../const";
import { TRequestResetData, IResetPasswordAction, IResetPasswordSuccessAction, IResetPasswordFailedAction, 
  IResetPasswordResetDataAction } from "../types/password-reset";
import { resetApi } from "../../utils/api";
import { AppDispatch } from "../types/types";

const resetPasswordFeed = (): IResetPasswordAction => ({
  type: RESET_PASSWORD
});

const resetPasswordSuccess = (success: boolean, message: string): IResetPasswordSuccessAction => ({
  type: RESET_PASSWORD_SUCCESS,
  success,
  message
});

const resetPasswordFailed = (): IResetPasswordFailedAction => ({
  type: RESET_PASSWORD_FAILED
});

const resetData = (): IResetPasswordResetDataAction => ({
  type: RESET_PASSWORD_RESET_DATA
});

export function resetPassword(userData: TRequestResetData) {
  
  return function (dispatch: AppDispatch) {
    dispatch(resetPasswordFeed());
    resetApi(userData)
    .then((res) => {  
      if (res && res.success) {
        dispatch(resetPasswordSuccess(res.success, res.message));
      } else {
        dispatch(resetPasswordFailed());
      }
    }).catch((err) => {
      dispatch(resetPasswordFailed());
      console.log(err);
    }) 
  }

}

export function resetPasswordResetData() { 
  return (resetData());
}