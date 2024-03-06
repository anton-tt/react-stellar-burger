import { WS_FEED_CONNECTION_START, WS_FEED_CONNECTION_SUCCESS, WS_FEED_CONNECTION_ERROR, WS_FEED_CONNECTION_CLOSED, 
  WS_FEED_CONNECTION_FINISH, WS_FEED_GET_MESSAGE, WS_FEED_SEND_MESSAGE } from "../const";
import { TResponseGetOrderData } from "./order-get";  

export type TResponseOrdersDataWhitsTotal = {
  orders: Array<TResponseGetOrderData>;
  total: number;
  totalToday: number;
}; 

export interface IWsFeedConnectionStartAction {
  readonly type: typeof WS_FEED_CONNECTION_START;
}

export interface IWsFeedConnectionSuccessAction {
  readonly type: typeof WS_FEED_CONNECTION_SUCCESS;
}
  
export interface IWsFeedConnectionErrorAction {
  readonly type: typeof WS_FEED_CONNECTION_ERROR;
  payload: string;
}

export interface IWsFeedConnectionClosedAction {
  readonly type: typeof WS_FEED_CONNECTION_CLOSED;
}

export interface IWsFeedConnectionFinishAction {
  readonly type: typeof WS_FEED_CONNECTION_FINISH;
}

export interface IWsFeedGetMessageAction {
  readonly type: typeof WS_FEED_GET_MESSAGE;
  payload: TResponseOrdersDataWhitsTotal;
}

export interface IWsFeedSendMessageAction {
  readonly type: typeof WS_FEED_SEND_MESSAGE;
}

export type TWsFeedActions = 
  | IWsFeedConnectionStartAction
  | IWsFeedConnectionSuccessAction
  | IWsFeedConnectionErrorAction
  | IWsFeedConnectionClosedAction
  | IWsFeedConnectionFinishAction
  | IWsFeedGetMessageAction
  | IWsFeedSendMessageAction;

export type TInitialState = {
  wsFeedConnected: boolean;
  wsFeedMessages: TResponseOrdersDataWhitsTotal | undefined;
  wsFeedError: string | undefined;
}