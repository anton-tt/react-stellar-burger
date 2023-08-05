import { ADD_INGREDIENT, DELETE_INGREDIENT } from "../constants.js";

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
    default: {
      return state
    }
  }
  
} 