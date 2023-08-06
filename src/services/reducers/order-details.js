import { CREATE_ORDER, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAILED } from "../../utils/constants.js";

const initialState = {
  numberRequest: false,
  numberFailed: false,
  orderNumber: undefined
}

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER: {
      return {
        ...state,
          // Запрос начал выполняться
        numberRequest: true,
          // Сбрасываем статус наличия ошибок от предыдущего запроса на случай, если он был и завершился с ошибкой
        numberFailed: false,
      };
    }
    case CREATE_ORDER_SUCCESS: {
      return { 
        ...state, 
          // Запрос выполнился успешно, помещаем полученные данные в хранилище
        orderNumber: action.orderNumber, 
          // Запрос закончил своё выполнение
        numberRequest: false 
      };
    }
    case CREATE_ORDER_FAILED: {
      return { 
        ...state, 
          // Запрос выполнился с ошибкой, выставляем соответствующие значения в хранилище
        numberFailed: true, 
          // Запрос закончил своё выполнение
        numberRequest: false 
      };
    }
    default: {
      return state
    }
  }

} 