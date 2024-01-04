import { urlBase } from "./constants.js";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export function getIngredientsInfo() {
  return fetch(`${urlBase}ingredients`)
  .then(res => checkResponse(res))
}

export function addOrder(ingredientsId) {
  return fetch(`${urlBase}orders`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      "ingredients": ingredientsId
      })    
  })
  .then(res => checkResponse(res));
}

export function registerApi(userData) {
  return fetch(`${urlBase}auth/register`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      "email": userData.email, 
      "password": userData.password, 
      "name": userData.name
      })    
  })
  .then(res => checkResponse(res));
}

export function loginApi(userData) {
  return fetch(`${urlBase}auth/login`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      "email": userData.email, 
      "password": userData.password
      })    
  })
  .then(res => checkResponse(res));
}