import { ADD_INGREDIENT, DELETE_INGREDIENT, UPDATE_INGREDIENT } from "../../utils/constants.js";
import { moveArrayElements } from "../../utils/utils.js";

const initialState = {
  bunsData: undefined,
  fillingData: []
}

export const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      if (action.ingredient.type === "bun") {
        return {
          ...state,
          bunsData: action.ingredient
        };
      } else {
        return {
          ...state,
          fillingData: [...state.fillingData, 
            action.ingredient]
        };  
      }  
    }    
    case DELETE_INGREDIENT: {
      return {
        ...state,
        fillingData: state.fillingData.filter((item) => item._localId !== action.ingredient._localId)
      }
    }
    case UPDATE_INGREDIENT: {
      const dragIngredientId = action.dragIngredientId;
      const dropIngredientId = action.dropIngredientId;
      return {
        ...state,
        fillingData: moveArrayElements(state.fillingData, dragIngredientId, dropIngredientId)
      }
    }
    default: {
      return state
    }
  }
  
} 