import { RESET_PASSWORD, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILED, RESET_PASSWORD_RESET_DATA } from "../const";

export type TRequestData = {
  password: string;
  token: string;
};
  
export interface IResetPasswordAction {
  readonly type: typeof RESET_PASSWORD;
}
  
export interface IResetPasswordSuccessAction {
  readonly type: typeof RESET_PASSWORD_SUCCESS;
  success: boolean;
  message: string;
}
  
export interface IResetPasswordFailedAction {
  readonly type: typeof RESET_PASSWORD_FAILED;
}
  
export interface IResetPasswordResetDataAction {
  readonly type: typeof RESET_PASSWORD_RESET_DATA;
}
  
export type TResetPasswordActions = 
  | IResetPasswordAction
  | IResetPasswordSuccessAction
  | IResetPasswordFailedAction
  | IResetPasswordResetDataAction;

export type TInitialState = {
  resetRequest: boolean;
  resetFailed: boolean;
  resetSuccess: boolean;
  resetMessage: string;
}  