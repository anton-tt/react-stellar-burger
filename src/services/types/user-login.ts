import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED, LOGIN_USER_RESET_DATA } from "../const";

export type TRequestUserData = {
  email: string;
  password: string;
};
  
export type TResponseUserData = {
  email: string;
  name: string;
}; 
  
  // типизация экшенов
export interface ILoginUserAction {
  readonly type: typeof LOGIN_USER;
}
  
export interface ILoginUserSuccessAction {
  readonly type: typeof LOGIN_USER_SUCCESS;
  success: boolean;
  user: TResponseUserData;
}
  
export interface ILoginUserFailedAction {
  readonly type: typeof LOGIN_USER_FAILED;
}
  
export interface ILoginUserResetDataAction {
  readonly type: typeof LOGIN_USER_RESET_DATA;
}
  
  // объединяем в Union
export type TLoginUserActions = 
  | ILoginUserAction
  | ILoginUserSuccessAction
  | ILoginUserFailedAction
  | ILoginUserResetDataAction;

  // типизация начального состояния
export type TInitialState = {
  loginRequest: boolean;
  loginFailed: boolean;
  userData: TResponseUserData | undefined;
  loginSuccess: boolean;
}