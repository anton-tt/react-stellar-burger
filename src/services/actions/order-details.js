import { addOrder } from "../../utils/api.jsx";
import { CREATE_ORDER, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAILED } from "../constants.js";

export function createOrder(ingredientsId) {
    // Воспользуемся первым аргументом из усилителя redux-thunk — dispatch
  return function (dispatch) {
      /* Проставим флаг в хранилище о том, что мы начали выполнять запрос.
      Это нужно, чтобы отрисовать в интерфейсе лоадер или заблокировать ввод на время выполнения запроса */
    dispatch({ type: CREATE_ORDER });
      // Запрашиваем данные у сервера
    addOrder(ingredientsId)
    .then((res) => {  
      if (res && res.success) {
          // В случае успешного получения данных вызываем экшен для записи полученных данных в хранилище
        dispatch({ type: CREATE_ORDER_SUCCESS, 
        orderNumber: res.order.number});
      } else {
          // Если произошла ошибка, отправляем соответствующий экшен
        dispatch({type: CREATE_ORDER_FAILED});
      }
    }).catch((err) => {
        // Если сервер не вернул данные, также отправляем экшен об ошибке
      dispatch({ type: CREATE_ORDER_FAILED })
      console.log(err);
    }) 
  }

}