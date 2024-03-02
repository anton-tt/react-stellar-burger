import { WS_FEED_CONNECTION_START, WS_FEED_CONNECTION_SUCCESS, WS_FEED_CONNECTION_ERROR, WS_FEED_CONNECTION_CLOSED, 
  WS_FEED_CONNECTION_FINISH, WS_FEED_GET_MESSAGE, WS_FEED_SEND_MESSAGE } from "../const";
import { TResponseOrdersDataWhitsTotal, IWsFeedConnectionStartAction, IWsFeedConnectionSuccessAction, 
  IWsFeedConnectionErrorAction, IWsFeedConnectionClosedAction, IWsFeedConnectionFinishAction, IWsFeedGetMessageAction, 
  IWsFeedSendMessageAction } from "../types/socket-feed";

export function startFeedConnection(): IWsFeedConnectionStartAction { 
  return ({ type: WS_FEED_CONNECTION_START });
} 

export function successFeedConnection(): IWsFeedConnectionSuccessAction { 
  return ({ type: WS_FEED_CONNECTION_SUCCESS });
} 

export function errorFeedConnection(error: string): IWsFeedConnectionErrorAction { 
  return ({ type: WS_FEED_CONNECTION_ERROR,
            payload: error });
} 

export function closedFeedConnection(): IWsFeedConnectionClosedAction { 
  return ({ type: WS_FEED_CONNECTION_CLOSED });
}

export function finishFeedConnection(): IWsFeedConnectionFinishAction { 
    return ({ type: WS_FEED_CONNECTION_FINISH });
  }

export function getMessageConnection(message: TResponseOrdersDataWhitsTotal): IWsFeedGetMessageAction { 
  return ({ type: WS_FEED_GET_MESSAGE,
            payload: message });
}

export function sendMessageConnection(): IWsFeedSendMessageAction { 
  return ({ type: WS_FEED_SEND_MESSAGE });
}