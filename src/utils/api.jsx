const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export function getIngredientsInfo(urlBase) {
  return fetch(urlBase)
  .then(res => checkResponse(res))
}