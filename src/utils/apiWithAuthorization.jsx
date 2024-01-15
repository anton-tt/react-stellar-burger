import { urlBase, REFRESH_TOKEN, ACCESS_TOKEN } from "./constants.js";
import { setCookie, getCookie } from "./cookie.js";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export function updateToken() {
  return fetch(`${urlBase}auth/token`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      "token": localStorage.getItem(REFRESH_TOKEN)
    })    
    })
  .then(res => checkResponse(res));
}

export const fetchWithToken = async (urlBase, requestData) => {
  
  try {
    const res = await fetch(urlBase, requestData);
    return await checkResponse(res);
  } catch (err) {
    if (err.message === "jwt expired" || "jwt malformed") {
      const tokenData = await updateToken();
      if (!tokenData.success) {
        return Promise.reject(tokenData);
      }
      const accessToken = tokenData.accessToken.split('Bearer ')[1];
      setCookie(ACCESS_TOKEN, accessToken);
      localStorage.setItem(REFRESH_TOKEN, tokenData.refreshToken);
      requestData.headers.authorization = 'Bearer ' + getCookie(ACCESS_TOKEN)//accessToken;
      const res = await fetch(urlBase, requestData);
      return await checkResponse(res);
    } else {
      return Promise.reject(err);
    }
  }
  
};

export function getUserData() {
  return fetchWithToken(`${urlBase}auth/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + getCookie(ACCESS_TOKEN)
    }   
  })
}

export function updateUserData(userData) {
  return fetchWithToken(`${urlBase}auth/user`, {
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
 }