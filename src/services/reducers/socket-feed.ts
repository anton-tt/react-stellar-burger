import { WS_FEED_CONNECTION_SUCCESS, WS_FEED_CONNECTION_ERROR, WS_FEED_CONNECTION_CLOSED, 
    WS_FEED_GET_MESSAGE } from "../const";
import { TInitialState, TWsFeedActions } from "../types/socket-feed";

const initialState: TInitialState = {
  wsFeedConnected: false,
  wsFeedMessages: undefined,
  wsFeedError: undefined
};

export const wsFeedReducer = (state = initialState, action: TWsFeedActions): TInitialState => {
  switch (action.type) {
      // Опишем обработку экшена с типом WS_FEED_CONNECTION_SUCCESS
      // Установим флаг wsFeedConnected в состояние true
    case WS_FEED_CONNECTION_SUCCESS:
      return {
        ...state,
        wsFeedConnected: true,
        wsFeedMessages: undefined,
        wsFeedError: undefined    
      };
      // Опишем обработку экшена с типом WS_FEED_CONNECTION_ERROR
      // Установим флаг wsFeedConnected в состояние false и передадим ошибку из action.payload
    case WS_FEED_CONNECTION_ERROR:
      return {
        ...state,
        wsFeedConnected: false,
        wsFeedMessages: undefined,
        wsFeedError: action.payload
      };
      // Опишем обработку экшена с типом WS_FEED_CONNECTION_CLOSED, когда соединение закрывается
      // Установим флаг wsFeedConnected в состояние false
    case WS_FEED_CONNECTION_CLOSED:
      return {
        ...state,
        wsFeedConnected: false,
        wsFeedMessages: undefined,
        wsFeedError: undefined
      };
      // Опишем обработку экшена с типом WS_FEED_GET_MESSAGE
      // Обработка происходит, когда с сервера возвращаются данные
      // В wsFeedMessages передадим данные, которые пришли с сервера
    case WS_FEED_GET_MESSAGE:
      return {
        ...state,
        wsFeedConnected: true,
        wsFeedMessages: action.payload,
        wsFeedError: undefined
      };
    default:
      return state;
  }

}; 