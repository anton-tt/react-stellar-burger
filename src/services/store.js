import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root-reducer.js';
import socketMiddleware from './middleware/socket-middleware.js';
import { WS_FEED_CONNECTION_START, WS_FEED_CONNECTION_SUCCESS, WS_FEED_CONNECTION_ERROR, WS_FEED_CONNECTION_CLOSED, 
  WS_FEED_CONNECTION_FINISH, WS_FEED_GET_MESSAGE, WS_FEED_SEND_MESSAGE, WS_HISTORY_CONNECTION_START, WS_HISTORY_CONNECTION_SUCCESS, 
  WS_HISTORY_CONNECTION_ERROR, WS_HISTORY_CONNECTION_CLOSED, WS_HISTORY_CONNECTION_FINISH, WS_HISTORY_GET_MESSAGE, 
  WS_HISTORY_SEND_MESSAGE, WS_FEED_URL, WS_HISTORY_URL } from "../utils/constants.js";

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

  const wsFeedActions = {
    wsInit: WS_FEED_CONNECTION_START, 
    onOpen: WS_FEED_CONNECTION_SUCCESS,
    onClose: WS_FEED_CONNECTION_CLOSED,
    onError: WS_FEED_CONNECTION_ERROR,
    onMessage: WS_FEED_GET_MESSAGE,
    wsSendMessage: WS_FEED_SEND_MESSAGE,
    wsClose: WS_FEED_CONNECTION_FINISH
  };

  const wsHistoryActions = {
    wsInit: WS_HISTORY_CONNECTION_START, 
    onOpen: WS_HISTORY_CONNECTION_SUCCESS,
    onClose: WS_HISTORY_CONNECTION_CLOSED,
    onError: WS_HISTORY_CONNECTION_ERROR,
    onMessage: WS_HISTORY_GET_MESSAGE,
    wsSendMessage: WS_HISTORY_SEND_MESSAGE,
    wsClose: WS_HISTORY_CONNECTION_FINISH
  };

  const enhancer = composeEnhancers(
    applyMiddleware(
      thunk,
      socketMiddleware(WS_FEED_URL, wsFeedActions),
      socketMiddleware(WS_HISTORY_URL, wsHistoryActions)
    )
  );

//const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(rootReducer, enhancer);

export default store;