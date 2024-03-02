import { GET_ORDER, GET_ORDER_SUCCESS, GET_ORDER_FAILED } from "../const";
import { getOrderStructure } from "../../utils/api.jsx";
import { TResponseGetOrderData, IGetOrderAction, IGetOrderSuccessAction, IGetOrderFailedAction } from "../types/order-get";
import { AppDispatch } from "../types/types";

const getOrderFeed = (): IGetOrderAction => ({
  type: GET_ORDER
});

const getOrderSuccess = (success: boolean, order: TResponseGetOrderData): IGetOrderSuccessAction => ({
  type: GET_ORDER_SUCCESS,
  success,
  order
});

const getOrderFailed = (): IGetOrderFailedAction => ({
  type: GET_ORDER_FAILED
});

export function getOrder(orderNumber: number) {
  return function (dispatch: AppDispatch) {
    dispatch(getOrderFeed());
    getOrderStructure(orderNumber)
    .then((res) => {  
      if (res && res.success) {
        dispatch(getOrderSuccess(res.success, res.orders[0]));
      } else {
        dispatch(getOrderFailed());
      }
    }).catch((err) => {
      dispatch(getOrderFailed());
      console.log(err);
    }) 
  }

}