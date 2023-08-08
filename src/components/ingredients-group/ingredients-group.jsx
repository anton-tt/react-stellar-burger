import { useState } from "react";
import { useDispatch } from 'react-redux';
import Ingredient from "../ingredient/ingredient.jsx";
import ModalBase from "../modal-base/modal-base.jsx";
import IngredientDetails from "../ingredient-details/ingredient-details.jsx";
import styles from "./ingredients-group.module.css";
import { addIngredientData, removeIngredientData } from "../../services/actions/ingredient-details.js";
import { ingredientPropType } from "../../utils/prop-types.js";
import PropTypes from "prop-types";

function IngredientsGroup({groupData}) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const dispatch = useDispatch();
  
  const openModal = (ingredient) => {
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
              { isOpenModal && (
                <ModalBase closeModal={closeModal}>
                  <IngredientDetails />
                </ModalBase>) 
              }
            </li>);
        })
      }  
    </ul>
  );

}

IngredientsGroup.propTypes = { 
  groupData: PropTypes.arrayOf(ingredientPropType).isRequired
}

export default IngredientsGroup;