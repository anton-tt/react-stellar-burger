import { Dispatch } from "redux";
import rootReducer from '../reducers/root-reducer';
import { TRegisterUserActions } from "./user-register";
import { TLoginUserActions } from "./user-login";
import { TForgotPasswordActions } from "./password-forgot";
import { TResetPasswordActions } from "./password-reset";
import { TGetUserActions } from "./user-get";
import { TUpdateUserActions } from "./user-update";
import { TLogoutUserActions } from "./user-logout";
import { TGetIngredientsActions } from "./burger-ingredients";
import { TIngredientDetailsActions } from "./ingredient-details";
import { TBurgerConstructorActions } from "./burger-constructor";
import { TOrderDetailsActions } from "./order-details";
import { TGetOrderActions } from "./order-get";
import { TWsFeedActions } from "./socket-feed";
import { TWsHistoryActions } from "./socket-history";
import { TUpdateTokenActions } from "./update-token";
import store from "../store";
import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';

  // Типизация всех экшенов приложения
export type TApplicationActions = 
  | TRegisterUserActions
  | TLoginUserActions
  | TForgotPasswordActions
  | TResetPasswordActions
  | TGetUserActions
  | TUpdateUserActions
  | TLogoutUserActions
  | TGetIngredientsActions
  | TIngredientDetailsActions
  | TBurgerConstructorActions
  | TOrderDetailsActions
  | TGetOrderActions
  | TWsFeedActions
  | TWsHistoryActions
  | TUpdateTokenActions;

  // Типизация метода dispatch для проверки на валидность отправляемого экшена


export type TStore = ReturnType<typeof rootReducer>;

//export type AppDispatch = typeof store.dispatch; 

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, TStore, TApplicationActions>
>;

export type AppDispatch = Dispatch<TApplicationActions>;