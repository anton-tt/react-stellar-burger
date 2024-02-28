import { Dispatch } from "redux";
import { TRegisterUserActions } from "./user-register";
import { TLoginUserActions } from "./user-login";
import { TForgotPasswordActions } from "./password-forgot";
import { TResetPasswordActions } from "./password-reset";
import { TGetUserActions } from "./user-get";
import { TUpdateUserActions } from "./user-update";
import { TLogoutUserActions } from "./user-logout";

  // Типизация всех экшенов приложения
type TApplicationActions = 
  | TRegisterUserActions
  | TLoginUserActions
  | TForgotPasswordActions
  | TResetPasswordActions
  | TGetUserActions
  | TUpdateUserActions
  | TLogoutUserActions;

  // Типизация метода dispatch для проверки на валидность отправляемого экшена
export type AppDispatch = Dispatch<TApplicationActions>; 