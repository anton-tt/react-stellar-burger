import { UPDATE_TOKEN, UPDATE_TOKEN_SUCCESS, UPDATE_TOKEN_FAILED } from "../const";
  
export interface IUpdateTokenAction {
  readonly type: typeof UPDATE_TOKEN;
}
  
export interface IUpdateTokenSuccessAction {
  readonly type: typeof UPDATE_TOKEN_SUCCESS;
  success: boolean;
}
  
export interface IUpdateTokenFailedAction {
  readonly type: typeof UPDATE_TOKEN_FAILED;
}

export type TUpdateTokenActions = 
  | IUpdateTokenAction
  | IUpdateTokenSuccessAction
  | IUpdateTokenFailedAction;

export type TInitialState = {
  tokenRequest: boolean;
  tokenFailed: boolean;
  successUpdateToken: boolean;
}