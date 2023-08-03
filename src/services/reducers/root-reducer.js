import { combineReducers } from "redux";
import { orderReducer } from './order-details.js';

const rootReducer = combineReducers({
  orderNumber: orderReducer
}); 

export default rootReducer;