export const moveArrayElements = (fillingData, dragIngredientId, dropIngredientId) => {
  const newFillingData = [...fillingData];
  const dragIngredientIndex = fillingData.findIndex((item) => item.id === dragIngredientId);
  const dropIngredientIndex = fillingData.findIndex((item) => item.id === dropIngredientId);
    
  const dragIngredient = newFillingData.splice(dragIngredientIndex, 1)[0];
  newFillingData.splice(dropIngredientIndex, 0, dragIngredient);
  return newFillingData
} 

export const getBunsPrice = (newBun, oldBun) => {
  let price = 0;
  if (oldBun === undefined) {
    price = newBun.price * 2;
  } else if (oldBun._id !== newBun._id) {
    price = price + (newBun.price - oldBun.price) * 2; 
  } else {
    price = 0;
  }
  return price
}