import { GET_INGREDIENTS, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILED } from "../../utils/constants.js";

const initialState = {
  ingredientsRequest: false,
  ingredientsFailed: false,
  ingredientsData: []
}

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS: {
      return {
        ...state,
        ingredientsRequest: true,
        ingredientsFailed: false
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return { 
        ...state, 
        ingredientsData: action.ingredientsList, 
        ingredientsRequest: false 
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return { 
        ...state, 
        ingredientsFailed: true, 
        ingredientsRequest: false 
      };
    }
    default: {
      return state
    }
  }

} 