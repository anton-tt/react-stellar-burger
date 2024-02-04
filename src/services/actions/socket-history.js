import { ACCESS_TOKEN, WS_HISTORY_CONNECTION_START, WS_HISTORY_CONNECTION_SUCCESS, WS_HISTORY_CONNECTION_ERROR, 
  WS_HISTORY_CONNECTION_CLOSED, WS_HISTORY_CONNECTION_FINISH, WS_HISTORY_GET_MESSAGE, WS_HISTORY_SEND_MESSAGE } from "../../utils/constants.js";
import { getCookie } from "../../utils/cookie.js";

export function startHistoryConnection() { 
  return ({ type: WS_HISTORY_CONNECTION_START,
            accessToken: getCookie(ACCESS_TOKEN) });
} 

export function successHistoryConnection() { 
  return ({ type: WS_HISTORY_CONNECTION_SUCCESS });
} 

export function errorHistoryConnection() { 
  return ({ type: WS_HISTORY_CONNECTION_ERROR });
} 

export function closedHistoryConnection() { 
  return ({ type: WS_HISTORY_CONNECTION_CLOSED });
}

export function finishHistoryConnection() { 
  return ({ type: WS_HISTORY_CONNECTION_FINISH });
}

export function getMessageHistoryConnection(message) { 
  return ({ type: WS_HISTORY_GET_MESSAGE,
            payload: message });
}

export function sendMessageHistoryConnection() { 
  return ({ type: WS_HISTORY_SEND_MESSAGE });
}