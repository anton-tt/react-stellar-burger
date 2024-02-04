import { GET_ORDER, GET_ORDER_SUCCESS, GET_ORDER_FAILED } from "../../utils/constants.js";

const initialState = {
  getOrderRequest: false,
  getOrderFailed: false,
  getOrderStructure: undefined,
  successGetOrder: false
}

export const getOrderStructureReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER: {
      return {
        ...state,
        getOrderRequest: true,
        getOrderFailed: false,
        getOrderStructure: undefined,
        successGetOrder: false
      };
    }
    case GET_ORDER_SUCCESS: {
      return { 
        ...state,
        getOrderRequest: false, 
        getOrderFailed: false,
        getOrderStructure: action.orders,
        successGetOrder: action.success
      };
    }
    case GET_ORDER_FAILED: {
      return { 
        ...state, 
        getOrderRequest: false,
        getOrderFailed: true, 
        getOrderStructure: undefined, 
        successGetOrder: false
      };
    }
    default: {
      return state
    }
  }

} 