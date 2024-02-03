import { ORDERS_PATH, GET_ORDER, GET_ORDER_SUCCESS, GET_ORDER_FAILED, GET_ORDER_RESET_DATA } from "../../utils/constants.js";
import { getOrderStructure } from "../../utils/api.jsx";

export function getOrder(orderNumber) {
  console.log(orderNumber);
  console.log(`${ORDERS_PATH}/${orderNumber}`);
  return function (dispatch) {
    dispatch({ type: GET_ORDER });
    getOrderStructure(orderNumber)
    .then((res) => {  
      if (res && res.success) {
        console.log("!!!");
        console.log(res);
        dispatch({ type: GET_ORDER_SUCCESS,
          success: res.success, 
          orders: res.orders[0]});
      } else {
        dispatch({type: GET_ORDER_FAILED  
        });
      }
    }).catch((err) => {
      dispatch({ type: GET_ORDER_FAILED });
      console.log(err);
    }) 
  }

}

export function resetGetOrderData() { 
  return ({ type: GET_ORDER_RESET_DATA });
}