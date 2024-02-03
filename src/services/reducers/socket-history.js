import { WS_HISTORY_CONNECTION_START, WS_HISTORY_CONNECTION_SUCCESS, WS_HISTORY_CONNECTION_ERROR, WS_HISTORY_CONNECTION_CLOSED, 
  WS_HISTORY_CONNECTION_FINISH, WS_HISTORY_GET_MESSAGE, WS_HISTORY_SEND_MESSAGE } from "../../utils/constants.js";

const initialState = {
  wsHistoryConnected: false,
  wsHistoryMessages: undefined,
  wsHistoryError: undefined
};

export const wsHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
      // Опишем обработку экшена с типом WS_FEED_CONNECTION_SUCCESS
      // Установим флаг wsFeedConnected в состояние true
    case WS_HISTORY_CONNECTION_SUCCESS:
      return {
        ...state,
        wsHistoryConnected: true,
        wsHistoryMessages: undefined,
        wsHistoryError: undefined    
      };
      // Опишем обработку экшена с типом WS_FEED_CONNECTION_ERROR
      // Установим флаг wsFeedConnected в состояние false и передадим ошибку из action.payload
    case WS_HISTORY_CONNECTION_ERROR:
      return {
        ...state,
        wsHistoryConnected: false,
        wsHistoryMessages: undefined,
        wsHistoryError: action.payload
      };
      // Опишем обработку экшена с типом WS_FEED_CONNECTION_CLOSED, когда соединение закрывается
      // Установим флаг wsFeedConnected в состояние false
    case WS_HISTORY_CONNECTION_CLOSED:
      return {
        ...state,
        wsHistoryConnected: false,
        wsHistoryMessages: undefined,
        wsHistoryError: undefined
      };
      // Опишем обработку экшена с типом WS_FEED_GET_MESSAGE
      // Обработка происходит, когда с сервера возвращаются данные
      // В wsFeedMessages передадим данные, которые пришли с сервера
    case WS_HISTORY_GET_MESSAGE:
      console.log("uuuuuuu");
    console.log(action.payload);
      
      return {
        ...state,
        wsHistoryConnected: true,
        wsHistoryMessages: action.payload,
        wsHistoryError: undefined
      };
    default:
      return state;
  }

}; 