import { Dispatch } from "redux";
import { TRegisterUserActions } from "./user-register";
import { TLoginUserActions } from "./user-login";
import { TForgotPasswordActions } from "./password-forgot";
import { TResetPasswordActions } from "./password-reset";

  // Типизация всех экшенов приложения
type TApplicationActions = 
  | TRegisterUserActions
  | TLoginUserActions
  | TForgotPasswordActions
  | TResetPasswordActions;

  // Типизация метода dispatch для проверки на валидность отправляемого экшена
export type AppDispatch = Dispatch<TApplicationActions>; 