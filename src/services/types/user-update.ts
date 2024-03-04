import { UPDATE_USER, UPDATE_USER_SUCCESS, UPDATE_USER_FAILED, UPDATE_USER_RESET_DATA } from "../const";

export type TRequestUpdateUserData = {
  email: string;
  name: string;
};

export type TResponseUpdateUserData = {
  email: string;
  name: string;
}; 
  
export interface IUpdateUserAction {
  readonly type: typeof UPDATE_USER;
}
  
export interface IUpdateUserSuccessAction {
  readonly type: typeof UPDATE_USER_SUCCESS;
  success: boolean;
  user: TResponseUpdateUserData;
}
  
export interface IUpdateUserFailedAction {
  readonly type: typeof UPDATE_USER_FAILED;
}
  
export interface IUpdateUserResetDataAction {
  readonly type: typeof UPDATE_USER_RESET_DATA;
}
  
export type TUpdateUserActions = 
  | IUpdateUserAction
  | IUpdateUserSuccessAction
  | IUpdateUserFailedAction
  | IUpdateUserResetDataAction;

export type TInitialState = {
  updateUserRequest: boolean;
  updateUserFailed: boolean;
  updateUserData: TResponseUpdateUserData | undefined;
  updateUserSuccess: boolean;
}