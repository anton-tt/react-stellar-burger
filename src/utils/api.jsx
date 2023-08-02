const urlBase = "https://norma.nomoreparties.space/api/";

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