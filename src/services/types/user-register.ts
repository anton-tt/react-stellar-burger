import { REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAILED, REGISTER_USER_RESET_DATA } from "../const";

export type TRequestRegisterUserData = {
  email: string;
  password: string;
  name: string;
};
  
export type  TResponseRegisterUserData = {
  email: string;
  name: string;
}; 
  
export interface IRegisterUserAction {
  readonly type: typeof REGISTER_USER;
}
  
export interface IRegisterUserSuccessAction {
  readonly type: typeof REGISTER_USER_SUCCESS;
  success: boolean;
  user:  TResponseRegisterUserData;
}
  
export interface IRegisterUserFailedAction {
  readonly type: typeof REGISTER_USER_FAILED;
}
  
export interface IRegisterUserResetDataAction {
  readonly type: typeof REGISTER_USER_RESET_DATA;
}
  
export type TRegisterUserActions = 
  | IRegisterUserAction
  | IRegisterUserSuccessAction
  | IRegisterUserFailedAction
  | IRegisterUserResetDataAction;

export type TInitialState = {
  registerRequest: boolean;
  registerFailed: boolean;
  userData:  TResponseRegisterUserData | undefined;
  registerSuccess: boolean;
}  