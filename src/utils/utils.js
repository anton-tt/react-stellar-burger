export const moveArrayElements = (fillingData, dragIngredientId, dropIngredientId) => {
  const newFillingData = [...fillingData];
  const dragIngredientIndex = fillingData.findIndex((item) => item.id === dragIngredientId);
  const dropIngredientIndex = fillingData.findIndex((item) => item.id === dropIngredientId);
    
  const dragIngredient = newFillingData.splice(dragIngredientIndex, 1)[0];
  newFillingData.splice(dropIngredientIndex, 0, dragIngredient);
  return newFillingData
} 