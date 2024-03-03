import { useState } from "react";
import { useDispatch } from 'react-redux';
import { TResponseIngredientData } from "../../services/types/burger-ingredients";
import Ingredient from "../ingredient/ingredient";
import { addIngredientData, removeIngredientData } from "../../services/actions/ingredient-details";
import styles from "./ingredients-group.module.css";

type TIngredientsGroup = {
  groupData: Array<TResponseIngredientData>;
}; 

function IngredientsGroup({ groupData }: TIngredientsGroup) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const dispatch = useDispatch();
  
  const openModal = (ingredient: TResponseIngredientData) => {
    setIsOpenModal(true);
    dispatch(addIngredientData(ingredient));
  }
  const closeModal = () => {
    setIsOpenModal(false);
    dispatch(removeIngredientData());  
  }

  return (
    <ul className={`pr-2 pb-10 pl-4 ${styles.group}`} >
      { groupData.map((element) => {
          return ( 
            <li key={element._id}>
              <Ingredient openModal = {() => {openModal(element)}} ingredientData={element} />
              
            </li>);
        })
      }  
    </ul>
  );

}

export default IngredientsGroup;