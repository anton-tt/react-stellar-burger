import { ADD_INGREDIENT_DETAILS, REMOVE_INGREDIENT_DETAILS } from "../const";
import { TInitialState, TIngredientDetailsActions } from "../types/ingredient-details";

const initialState: TInitialState = {
  ingredient: undefined
}

export const ingredientReducer = (state = initialState, action: TIngredientDetailsActions): TInitialState => {
  switch (action.type) {
    case ADD_INGREDIENT_DETAILS: {
      return {
        ...state,
        ingredient: action.ingredient,
      };
    }
    case REMOVE_INGREDIENT_DETAILS: {
      return state
    }
    default: {
      return state
    }
  }

} 