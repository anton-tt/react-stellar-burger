import { LOGOUT_USER, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAILED, LOGOUT_USER_RESET_DATA } from "../const.js";  
  
export interface ILogoutUserAction {
  readonly type: typeof LOGOUT_USER;
}
  
export interface ILogoutUserSuccessAction {
  readonly type: typeof LOGOUT_USER_SUCCESS;
  success: boolean;
  message: string;
}
  
export interface ILogoutUserFailedAction {
  readonly type: typeof LOGOUT_USER_FAILED;
}
  
export interface ILogoutUserResetDataAction {
  readonly type: typeof LOGOUT_USER_RESET_DATA;
}

export type TLogoutUserActions = 
  | ILogoutUserAction
  | ILogoutUserSuccessAction
  | ILogoutUserFailedAction
  | ILogoutUserResetDataAction;

  export type TInitialState = {
    logoutRequest: boolean;
    logoutFailed: boolean;
    logoutSuccess: boolean;
    logoutMessage: string;
  }