import { GET_ORDER, GET_ORDER_SUCCESS, GET_ORDER_FAILED } from "../const";
import { TInitialState, TGetOrderActions } from "../types/order-get";

const initialState: TInitialState = {
  getOrderRequest: false,
  getOrderFailed: false,
  getOrderData: undefined,
  getOrderSuccess: false
}

export const getOrderStructureReducer = (state = initialState, action: TGetOrderActions): TInitialState => {
  switch (action.type) {
    case GET_ORDER: {
      return {
        ...state,
        getOrderRequest: true,
        getOrderFailed: false,
        getOrderData: undefined,
        getOrderSuccess: false
      };
    }
    case GET_ORDER_SUCCESS: {
      return { 
        ...state,
        getOrderRequest: false, 
        getOrderFailed: false,
        getOrderData: action.order,
        getOrderSuccess: action.success
      };
    }
    case GET_ORDER_FAILED: {
      return { 
        ...state, 
        getOrderRequest: false,
        getOrderFailed: true, 
        getOrderData: undefined, 
        getOrderSuccess: false
      };
    }
    default: {
      return state
    }
  }

} 