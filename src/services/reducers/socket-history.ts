import { WS_HISTORY_CONNECTION_SUCCESS, WS_HISTORY_CONNECTION_ERROR, WS_HISTORY_CONNECTION_CLOSED, 
  WS_HISTORY_GET_MESSAGE } from "../const";
import { TInitialState, TWsHistoryActions } from "../types/socket-history";

const initialState: TInitialState = {
  wsHistoryConnected: false,
  wsHistoryMessages: undefined,
  wsHistoryError: undefined
};

export const wsHistoryReducer = (state = initialState, action: TWsHistoryActions): TInitialState => {
  switch (action.type) {
    case WS_HISTORY_CONNECTION_SUCCESS:
      return {
        ...state,
        wsHistoryConnected: true,
        wsHistoryMessages: undefined,
        wsHistoryError: undefined    
      };
    case WS_HISTORY_CONNECTION_ERROR:
      return {
        ...state,
        wsHistoryConnected: false,
        wsHistoryMessages: undefined,
        wsHistoryError: action.payload
      };
    case WS_HISTORY_GET_MESSAGE:
      return {
        ...state,
        wsHistoryConnected: true,
        wsHistoryMessages: action.payload,
        wsHistoryError: undefined
      };
    case WS_HISTORY_CONNECTION_CLOSED:
      return {
        ...state,
        wsHistoryConnected: false,
        wsHistoryMessages: undefined,
        wsHistoryError: undefined
      };  
    default:
      return state;
  }

}; 