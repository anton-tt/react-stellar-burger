import { combineReducers } from "redux";
import { ingredientsReducer } from './burger-ingredients';
import { ingredientReducer } from './ingredient-details';
import { constructorReducer } from './burger-constructor';
import { orderReducer } from './order-details';
import { registerUserReducer } from './user-register';
import { loginUserReducer } from './user-login';
import { logoutUserReducer } from './user-logout';
import { forgotPasswordReducer } from './password-forgot';
import { resetPasswordReducer } from './password-reset';
import { getUserReducer } from './user-get';
import { updateUserReducer } from './user-update';
import { updateTokenReducer } from './token-update';
import { wsFeedReducer } from './socket-feed';
import { wsHistoryReducer } from './socket-history';
import { getOrderStructureReducer } from './order-get';

const rootReducer = combineReducers({
  ingredientsData: ingredientsReducer,
  ingredient: ingredientReducer,
  constructorData: constructorReducer,
  orderNumber: orderReducer,
  registerUserData: registerUserReducer,
  loginUserData: loginUserReducer,
  logoutUserData: logoutUserReducer,
  forgotPasswordData: forgotPasswordReducer,
  resetPasswordData: resetPasswordReducer,
  getUserData: getUserReducer,
  updateUserData: updateUserReducer,
  updateTokenData: updateTokenReducer,
  orderFeedData: wsFeedReducer,
  orderHistoryData: wsHistoryReducer,
  orderStructureData: getOrderStructureReducer
});  

export default rootReducer;