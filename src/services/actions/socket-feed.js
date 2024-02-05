import { WS_FEED_CONNECTION_START, WS_FEED_CONNECTION_SUCCESS, WS_FEED_CONNECTION_ERROR, WS_FEED_CONNECTION_CLOSED, 
    WS_FEED_CONNECTION_FINISH, WS_FEED_GET_MESSAGE, WS_FEED_SEND_MESSAGE } from "../../utils/constants.js";

export function startFeedConnection() { 
  return ({ type: WS_FEED_CONNECTION_START });
} 

export function successFeedConnection() { 
  return ({ type: WS_FEED_CONNECTION_SUCCESS });
} 

export function errorFeedConnection() { 
  return ({ type: WS_FEED_CONNECTION_ERROR });
} 

export function closedFeedConnection() { 
  return ({ type: WS_FEED_CONNECTION_CLOSED });
}

export function finishFeedConnection() { 
    return ({ type: WS_FEED_CONNECTION_FINISH });
  }

export function getMessageConnection(message) { 
  return ({ type: WS_FEED_GET_MESSAGE,
            payload: message });
}

export function sendMessageConnection() { 
  return ({ type: WS_FEED_SEND_MESSAGE });
}