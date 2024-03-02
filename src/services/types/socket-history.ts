import { WS_HISTORY_CONNECTION_START, WS_HISTORY_CONNECTION_SUCCESS, WS_HISTORY_CONNECTION_ERROR, WS_HISTORY_CONNECTION_CLOSED, 
  WS_HISTORY_CONNECTION_FINISH, WS_HISTORY_GET_MESSAGE, WS_HISTORY_SEND_MESSAGE, INVALID_OR_MISSING_TOKEN } from "../const";
import { TResponseGetOrderData } from "./order-get"; 

export type  TResponseGetMessageData = {
  message: string;
  orders: Array<TResponseGetOrderData>;
}; 

export interface IWsHistoryConnectionStartAction {
  readonly type: typeof WS_HISTORY_CONNECTION_START;
  accessToken: string | undefined;
}

export interface IWsHistoryConnectionSuccessAction {
  readonly type: typeof WS_HISTORY_CONNECTION_SUCCESS;
}
  
export interface IWsHistoryConnectionErrorAction {
  readonly type: typeof WS_HISTORY_CONNECTION_ERROR;
  payload: boolean;
}

export interface IWsHistoryConnectionClosedAction {
  readonly type: typeof WS_HISTORY_CONNECTION_CLOSED;
}

export interface IWsHistoryConnectionFinishAction {
  readonly type: typeof WS_HISTORY_CONNECTION_FINISH;
}

export interface IWsHistoryGetMessageAction {
  readonly type: typeof WS_HISTORY_GET_MESSAGE;
  payload: TResponseGetMessageData;
}

export interface IWsHistorySendMessageAction {
  readonly type: typeof WS_HISTORY_SEND_MESSAGE;
}

export type TWsHistoryActions = 
  | IWsHistoryConnectionStartAction
  | IWsHistoryConnectionSuccessAction
  | IWsHistoryConnectionErrorAction
  | IWsHistoryConnectionClosedAction
  | IWsHistoryConnectionFinishAction
  | IWsHistoryGetMessageAction
  | IWsHistorySendMessageAction;

export type TInitialState = {
  wsHistoryConnected: boolean;
  wsHistoryMessages: TResponseGetMessageData | undefined;
  wsHistoryError: boolean | undefined;
}