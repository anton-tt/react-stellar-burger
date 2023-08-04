import { OPEN_INGREDIENT, CLOSE_INGREDIENT } from "../constants.js";

const initialState = {
  ingredient: undefined
}

export const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_INGREDIENT: {
      return {
        ...state,
        ingredient: action.ingredient,
      };
    }
    case CLOSE_INGREDIENT: {
      return state
    }
    default: {
      return state
    }
  }

} 