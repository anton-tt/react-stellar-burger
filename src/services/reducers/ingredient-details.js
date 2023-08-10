import { ADD_INGREDIENT_DETAILS, REMOVE_INGREDIENT_DETAILS } from "../../utils/constants.js";

const initialState = {
  ingredient: undefined
}

export const ingredientReducer = (state = initialState, action) => {
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