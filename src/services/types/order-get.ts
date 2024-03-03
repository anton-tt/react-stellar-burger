import { GET_ORDER, GET_ORDER_SUCCESS, GET_ORDER_FAILED } from "../const";
import { TResponseIngredientData } from "../types/burger-ingredients";

export type TResponseGetOrderData = {
  ingredients: Array<string>;
  _id: string;
  status: string;
  number: number;
  createdAt: string;
  updatedAts: string;
  name: string;
}; 
  
export interface IGetOrderAction {
  readonly type: typeof GET_ORDER;
}
  
export interface IGetOrderSuccessAction {
  readonly type: typeof GET_ORDER_SUCCESS;
  success: boolean;
  order: TResponseGetOrderData;
}
  
export interface IGetOrderFailedAction {
  readonly type: typeof GET_ORDER_FAILED;
}
  
export type TGetOrderActions = 
  | IGetOrderAction
  | IGetOrderSuccessAction
  | IGetOrderFailedAction;

export type TInitialState = {
  getOrderRequest: boolean;
  getOrderFailed: boolean;
  getOrderData: TResponseGetOrderData | undefined;
  getOrderSuccess: boolean;
}