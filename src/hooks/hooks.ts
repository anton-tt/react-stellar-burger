import {
    TypedUseSelectorHook,
    useDispatch as dispatchHook,
    useSelector as selectorHook
  } from "react-redux";
import { TStore, AppDispatch, AppThunk } from "../services/types/types";
  
  // Теперь этот хук знает структуру хранилища
export const useSelector: TypedUseSelectorHook<TStore> = selectorHook;
  
  // Хук не даст отправить экшен, который ему не знаком
export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>();