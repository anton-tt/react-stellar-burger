import { CREATE_ORDER, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAILED, REMOVE_ORDER_NUMBER } from "../const";
  
export type TResponseOrderData = {
  number: number;
}; 
  
export interface IOrderDetailsAction {
  readonly type: typeof CREATE_ORDER;
}
  
export interface IOrderDetailsSuccessAction {
  readonly type: typeof CREATE_ORDER_SUCCESS;
  name: string;
  order: TResponseOrderData;
  success: boolean;
}
  
export interface IOrderDetailsFailedAction {
  readonly type: typeof CREATE_ORDER_FAILED;
}
  
export interface IOrderDetailsResetDataAction {
  readonly type: typeof REMOVE_ORDER_NUMBER;
}
  
export type TOrderDetailsActions = 
  | IOrderDetailsAction
  | IOrderDetailsSuccessAction
  | IOrderDetailsFailedAction
  | IOrderDetailsResetDataAction;

export type TInitialState = {
  orderRequest: boolean;
  orderFailed: boolean;
  orderName: string | undefined;
  orderNumber: number | undefined;
  orderSuccess: boolean;
}