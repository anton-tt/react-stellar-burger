import { urlBase, REFRESH_TOKEN, ACCESS_TOKEN, AUTHORIZATION_PATH, TOKEN_PATH, USER_PATH, ORDERS_PATH } from "./constants";
import { setCookie, getCookie } from "./cookie";
import { checkResponse, request } from "./api";
import { TRequestUpdateUserData } from "../services/types/user-update";
import { TRequestOptions, TResponseData } from "./apiType";

export const updateToken = () => request(`${AUTHORIZATION_PATH}${TOKEN_PATH}`, {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    "token": localStorage.getItem(REFRESH_TOKEN)
  })    
});

export const fetchWithToken = async (endpoint: string, requestData: TRequestOptions): Promise<Response & TResponseData> => {
  
  try {
    const res = await fetch(`${urlBase}${endpoint}`, requestData);
    return await checkResponse(res);
  } catch (err) {
    if ((err as Error).message === "jwt expired" || "jwt malformed") {
      const tokenData = await updateToken();
      if (!tokenData.success) {
        return Promise.reject(tokenData);
      }
      const accessToken = tokenData.accessToken.split('Bearer ')[1];
      setCookie(ACCESS_TOKEN, accessToken);
      localStorage.setItem(REFRESH_TOKEN, tokenData.refreshToken);
      requestData.headers.authorization = 'Bearer ' + getCookie(ACCESS_TOKEN)
      const res = await fetch(`${urlBase}${endpoint}`, requestData);
      return await checkResponse(res);
    } else {
      return Promise.reject(err);
    }
  }
  
};

export function getUserData() {
  return fetchWithToken(`${AUTHORIZATION_PATH}${USER_PATH}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + getCookie(ACCESS_TOKEN)
    }   
  })
};

export function updateUserData(userData: TRequestUpdateUserData) {
  return fetchWithToken(`${AUTHORIZATION_PATH}${USER_PATH}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + getCookie(ACCESS_TOKEN)
    },
    body: JSON.stringify({
    "name": userData.name,
    "email": userData.email
    })   
  })
 };

export function addOrder(ingredientsId: Array<string>) { 
  return fetchWithToken(ORDERS_PATH, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + getCookie(ACCESS_TOKEN)
    },
    body: JSON.stringify({
      "ingredients": ingredientsId
    })    
  })
};