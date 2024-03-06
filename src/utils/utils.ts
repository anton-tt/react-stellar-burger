import { TIngredientDataWithLocalId } from "../services/types/burger-constructor";

export const moveArrayElements = (fillingData: Array<TIngredientDataWithLocalId>, 
  dragIngredientId: number, dropIngredientId: number) => {
  const newFillingData = [...fillingData];
  const dragIngredientIndex = fillingData.findIndex((item) => +item._id === dragIngredientId);
  const dropIngredientIndex = fillingData.findIndex((item) => +item._id === dropIngredientId);
    
  const dragIngredient = newFillingData.splice(dragIngredientIndex, 1)[0];
  newFillingData.splice(dropIngredientIndex, 0, dragIngredient);
  return newFillingData
} 