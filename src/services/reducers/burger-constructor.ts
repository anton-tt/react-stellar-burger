import { ADD_INGREDIENT, DELETE_INGREDIENT, MOVE_INGREDIENT, CLEAR_CONSTRUCTOR } from "../const";
import { moveArrayElements } from "../../utils/utils";
import { TInitialState, TBurgerConstructorActions } from "../types/burger-constructor";

const initialState: TInitialState = {
  bunsData: undefined,
  fillingData: []
}

export const constructorReducer = (state = initialState, action: TBurgerConstructorActions): TInitialState => {
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
    case MOVE_INGREDIENT: {
      return {
        ...state,
        fillingData: moveArrayElements(state.fillingData, action.dragIngredientId, action.dropIngredientId)
      }
    }
    case CLEAR_CONSTRUCTOR: {
      return {
        bunsData: undefined,
        fillingData: []
      }
    }
    default: {
      return state;
    }
  }
  
} 