import { TStore } from "./store";

export const getRegisterUserData = (store: TStore) => store.registerUserData;
export const getLoginUserData = (store: TStore) => store.loginUserData;
export const getLogoutUserData = (store: TStore) => store.logoutUserData;

export const getForgotPasswordData = (store: TStore) => store.forgotPasswordData;
export const getResetPasswordData = (store: TStore) => store.resetPasswordData;

export const getCurrentUserData = (store: TStore) => store.getUserData;
export const getUpdateUserData = (store: TStore) => store.updateUserData;

export const getIngredientsData = (store: TStore) => store.ingredientsData;
export const getConstructorData = (store: TStore) => store.constructorData;
export const getOrderNumber = (store: TStore) => store.orderNumber; 
export const getOrderStructureData = (store: TStore) => store.orderStructureData;

export const getOrderFeedData = (store: TStore) => store.orderFeedData; 
export const getOrderHistoryData = (store: TStore) => store.orderHistoryData;