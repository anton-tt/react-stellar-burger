import { FORGOT_PASSWORD, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILED, FORGOT_PASSWORD_RESET_DATA } from "../const";
import { TRequestData, IForgotPasswordAction, IForgotPasswordSuccessAction, IForgotPasswordFailedAction, 
  IForgotPasswordResetDataAction } from "../types/password-forgot";
import { forgotApi } from "../../utils/api.jsx";
import { AppDispatch } from "../types/types"; 

const forgotPasswordFeed = (): IForgotPasswordAction => ({
  type: FORGOT_PASSWORD
});

const forgotPasswordSuccess = (success: boolean, message: string): IForgotPasswordSuccessAction => ({
  type: FORGOT_PASSWORD_SUCCESS,
  success,
  message
});

const forgotPasswordFailed = (): IForgotPasswordFailedAction => ({
  type: FORGOT_PASSWORD_FAILED
});

const resetData = (): IForgotPasswordResetDataAction => ({
  type: FORGOT_PASSWORD_RESET_DATA
});

export function forgotPassword(userData: TRequestData) {
  
  return function (dispatch: AppDispatch) {
    dispatch(forgotPasswordFeed());
    forgotApi(userData)
    .then((res) => {  
      if (res && res.success) {
        dispatch(forgotPasswordSuccess(res.success, res.message));
      } else {
        dispatch(forgotPasswordFailed());
      }
    }).catch((err) => {
      dispatch(forgotPasswordFailed());
      console.log(err);
    }) 
  }

}

export function resetForgotPasswordData() { 
  return (resetData());
}