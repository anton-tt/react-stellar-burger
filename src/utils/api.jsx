import { urlBase, REFRESH_TOKEN, INGREDIENTS_PATH, ORDERS_PATH, AUTHORIZATION_PATH, REGISTER_PAGE, LOGIN_PAGE, 
  LOGOUT_PATH, PASSWORD_RESET_BASE_PATH, PASSWORD_RESET_PATH } from "./constants.js";

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
};

export const checkSuccess = (res) => {
  if (res && res.success) {
    return res;
  }
  return Promise.reject(`Ответ не success: ${res}`);
};

export const request = (endpoint, options) => {
  return fetch(`${urlBase}${endpoint}`, options)
    .then(checkResponse)
    .then(checkSuccess);
};

export const getIngredientsInfo = () => request(INGREDIENTS_PATH);

export const registerApi = (userData) => request(`${AUTHORIZATION_PATH}${REGISTER_PAGE}`, {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    "email": userData.email, 
    "password": userData.password, 
    "name": userData.name
    })    
});

export const loginApi = (userData) => request(`${AUTHORIZATION_PATH}${LOGIN_PAGE}`, {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    "email": userData.email, 
    "password": userData.password
    })    
});

export const logoutApi = () => request(`${AUTHORIZATION_PATH}${LOGOUT_PATH}`, {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    "token": localStorage.getItem(REFRESH_TOKEN)
    })    
});

export const forgotApi = (userData) => request(PASSWORD_RESET_BASE_PATH, {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    "email": userData.email
    })    
});

export const resetApi = (userData) => request(`${PASSWORD_RESET_BASE_PATH}${PASSWORD_RESET_PATH}`, {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    "password": userData.password,
    "token": userData.token
    })    
});

export const getOrderStructure = (orderNumber) => request(`${ORDERS_PATH}/${orderNumber}`);