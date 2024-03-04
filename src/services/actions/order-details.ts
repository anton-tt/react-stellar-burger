import { CREATE_ORDER, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAILED, CLEAR_CONSTRUCTOR, 
  REMOVE_ORDER_NUMBER } from "../const";
import { TResponseOrderData, IOrderDetailsAction, IOrderDetailsSuccessAction, IOrderDetailsFailedAction, 
  IOrderDetailsResetDataAction } from "../types/order-details";
import { addOrder } from "../../utils/apiWithAuthorization";  
import { clearConstructor } from "../actions/burger-constructor";
import { AppDispatch } from "../types/types"; 

const orderDetailsFeed = (): IOrderDetailsAction => ({
  type: CREATE_ORDER
});

const orderDetailsSuccess = (name: string, order: TResponseOrderData, success: boolean): IOrderDetailsSuccessAction => ({
  type: CREATE_ORDER_SUCCESS,
  name,
  order,
  success
});

const orderDetailsFailed = (): IOrderDetailsFailedAction => ({
  type: CREATE_ORDER_FAILED
});

const resetData = (): IOrderDetailsResetDataAction => ({
  type: REMOVE_ORDER_NUMBER
});

export function createOrder(ingredientsId: Array<string>) {
    // Воспользуемся первым аргументом из усилителя redux-thunk — dispatch
  return function (dispatch: AppDispatch) {
      /* Проставим флаг в хранилище о том, что мы начали выполнять запрос.
      Это нужно, чтобы отрисовать в интерфейсе лоадер или заблокировать ввод на время выполнения запроса */
    dispatch(orderDetailsFeed());
      // Запрашиваем данные у сервера
    addOrder(ingredientsId)
    .then((res) => {  
      if (res && res.success) {
          // В случае успешного получения данных вызываем экшен для записи полученных данных в хранилище
        dispatch(orderDetailsSuccess(res.name, res.order, res.success));
        dispatch(clearConstructor());
      } else {
          // Если произошла ошибка, отправляем соответствующий экшен
        dispatch(orderDetailsFailed());
      }
    }).catch((err) => {
        // Если сервер не вернул данные, также отправляем экшен об ошибке
      dispatch(orderDetailsFailed());
      console.log(err);
    }) 
  }

}

export function removeOrderNumber() { 
  return (resetData());
}