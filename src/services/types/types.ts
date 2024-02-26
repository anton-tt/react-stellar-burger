import { Dispatch } from "redux";
import { TLoginUserActions } from "./user-login";

  // Типизация всех экшенов приложения
type TApplicationActions = TLoginUserActions;

  // Типизация метода dispatch для проверки на валидность отправляемого экшена
export type AppDispatch = Dispatch<TApplicationActions>; 