import { WS_HISTORY_CONNECTION_START, WS_HISTORY_CONNECTION_SUCCESS, WS_HISTORY_CONNECTION_ERROR, WS_HISTORY_CONNECTION_CLOSED, 
  WS_HISTORY_CONNECTION_FINISH, WS_HISTORY_GET_MESSAGE, WS_HISTORY_SEND_MESSAGE } from "../const";
import { IWsHistoryConnectionStartAction, IWsHistoryConnectionSuccessAction, IWsHistoryConnectionErrorAction, 
  IWsHistoryConnectionClosedAction, IWsHistoryConnectionFinishAction, IWsHistoryGetMessageAction, 
  IWsHistorySendMessageAction } from "../types/socket-history";  
import { ACCESS_TOKEN } from "../../utils/constants.js";
import { getCookie } from "../../utils/cookie.js";
import { TResponseGetOrderData } from "../types/order-get";

export function startHistoryConnection(): IWsHistoryConnectionStartAction { 
  return ({ type: WS_HISTORY_CONNECTION_START,
            accessToken: getCookie(ACCESS_TOKEN) });
} 

export function successHistoryConnection(): IWsHistoryConnectionSuccessAction { 
  return ({ type: WS_HISTORY_CONNECTION_SUCCESS });
} 

export function errorHistoryConnection(error: string): IWsHistoryConnectionErrorAction { 
  return ({ type: WS_HISTORY_CONNECTION_ERROR,
            payload: error });
} 

export function closedHistoryConnection(): IWsHistoryConnectionClosedAction { 
  return ({ type: WS_HISTORY_CONNECTION_CLOSED });
}

export function finishHistoryConnection(): IWsHistoryConnectionFinishAction { 
  return ({ type: WS_HISTORY_CONNECTION_FINISH });
}

export function getMessageHistoryConnection(message: Array<TResponseGetOrderData>): IWsHistoryGetMessageAction { 
  return ({ type: WS_HISTORY_GET_MESSAGE,
            payload: message });
}

export function sendMessageHistoryConnection(): IWsHistorySendMessageAction { 
  return ({ type: WS_HISTORY_SEND_MESSAGE });
}