import { FORGOT_PASSWORD, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILED, FORGOT_PASSWORD_RESET_DATA } from "../const";

export type TRequestForgotData = {
  email: string;
};
  
export interface IForgotPasswordAction {
  readonly type: typeof FORGOT_PASSWORD;
}
  
export interface IForgotPasswordSuccessAction {
  readonly type: typeof FORGOT_PASSWORD_SUCCESS;
  success: boolean;
  message: string;
}
  
export interface IForgotPasswordFailedAction {
  readonly type: typeof FORGOT_PASSWORD_FAILED;
}
  
export interface IForgotPasswordResetDataAction {
  readonly type: typeof FORGOT_PASSWORD_RESET_DATA;
}

export type TForgotPasswordActions = 
  | IForgotPasswordAction
  | IForgotPasswordSuccessAction
  | IForgotPasswordFailedAction
  | IForgotPasswordResetDataAction;

  export type TInitialState = {
    forgotRequest: boolean;
    forgotFailed: boolean;
    forgotSuccess: boolean;
    forgotMessage: string;
  }