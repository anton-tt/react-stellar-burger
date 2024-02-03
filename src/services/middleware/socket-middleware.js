const socketMiddleware = (wsUrl, wsActions) => {
  return store => {
    let socket = null;
  
    return next => action => {
      const { dispatch } = store;
      const { type, accessToken } = action;
     // console.log(action);
      const { wsInit, wsSendMessage, wsClose, onOpen, onClose, onError, onMessage } = wsActions;

      

      if (type === wsInit) {
        socket = new WebSocket(wsUrl);
      }

      if (type === wsInit && accessToken) {
        //console.log("!!!");
       // console.log(`${wsUrl}?token=${accessToken}`);
        socket = new WebSocket(`${wsUrl}?token=${accessToken}`);
      }

      if (socket) {
          // функция, которая вызывается при открытии сокета
        socket.onopen = event => {
          dispatch({ type: onOpen, payload: event });
        };
          // функция, которая вызывается при ошибке соединения
        socket.onerror = event => {
          dispatch({ type: onError, payload: event });
        };
          // функция, которая вызывается при получении события от сервера
        socket.onmessage = event => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;
          dispatch({ type: onMessage, payload: restParsedData });
        };
          // функция, которая вызывается при закрытии соединения
        socket.onclose = event => {
          dispatch({ type: onClose, payload: event });
        };

        if (type === wsSendMessage) {
          const message = action.payload;
            // функция для отправки сообщения на сервер
          socket.send(JSON.stringify(message));
        }
        if (type === wsClose) {
          socket.close(1000, "стоп, машина!");
          socket = null;
        }

      }
  
      next(action);
    };
  };
};

export default socketMiddleware;