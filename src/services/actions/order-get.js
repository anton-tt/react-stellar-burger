import { GET_ORDER, GET_ORDER_SUCCESS, GET_ORDER_FAILED } from "../../utils/constants.js";
import { getOrderStructure } from "../../utils/api.jsx";

export function getOrder(orderNumber) {
  return function (dispatch) {
    dispatch({ type: GET_ORDER });
    getOrderStructure(orderNumber)
    .then((res) => {  
      if (res && res.success) {
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