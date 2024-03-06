import { CREATE_ORDER, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAILED, REMOVE_ORDER_NUMBER } from "../const";
import { TInitialState, TOrderDetailsActions } from "../types/order-details";

const initialState: TInitialState = {
  orderRequest: false,
  orderFailed: false,
  orderName: undefined,
  orderSuccess: false,
  orderNumber: undefined
}

export const orderReducer = (state = initialState, action: TOrderDetailsActions): TInitialState => {
  switch (action.type) {
    case CREATE_ORDER: {
      return {
        ...state,
          // Запрос начал выполняться
        orderRequest: true,
          // Сбрасываем статус наличия ошибок от предыдущего запроса на случай, если он был и завершился с ошибкой
        orderFailed: false,
      };
    }
    case CREATE_ORDER_SUCCESS: {
      return { 
        ...state,
        orderSuccess: action.success, 
          // Запрос выполнился успешно, помещаем полученные данные в хранилище
        orderName: action.name,
        orderNumber: action.order.number, 
          // Запрос закончил своё выполнение
        orderRequest: false 
      };
    }
    case CREATE_ORDER_FAILED: {
      return { 
        ...state, 
          // Запрос выполнился с ошибкой, выставляем соответствующие значения в хранилище
        orderFailed: true, 
          // Запрос закончил своё выполнение
        orderRequest: false 
      };
    }
    case REMOVE_ORDER_NUMBER: {
      return { 
        ...state, 
          // Запрос выполнился, приводим значения в хранилище к изначальным
        orderRequest: false,
        orderFailed: false,
        orderNumber: undefined 
      };
    }  
    default: {
      return state
    }
  }

} 