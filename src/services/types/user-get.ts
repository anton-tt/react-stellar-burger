import { GET_USER, GET_USER_SUCCESS, GET_USER_FAILED, GET_USER_RESET_DATA } from "../const";
  
export type TResponseUserData = {
  email: string;
  name: string;
}; 
  
export interface IGetUserAction {
  readonly type: typeof GET_USER;
}
  
export interface IGetUserSuccessAction {
  readonly type: typeof GET_USER_SUCCESS;
  success: boolean;
  user: TResponseUserData;
}
  
export interface IGetUserFailedAction {
  readonly type: typeof GET_USER_FAILED;
}
  
export interface IGetUserResetDataAction {
  readonly type: typeof GET_USER_RESET_DATA;
}
  
export type TGetUserActions = 
  | IGetUserAction
  | IGetUserSuccessAction
  | IGetUserFailedAction
  | IGetUserResetDataAction;

export type TInitialState = {
  getUserRequest: boolean;
  getUserFailed: boolean;
  getUserData: TResponseUserData | undefined;
  getUserSuccess: boolean;
}