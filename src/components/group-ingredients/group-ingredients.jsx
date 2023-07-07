import { useState } from "react";
import { ingredientPropType } from "../../utils/prop-types.js";
import Ingredient from "../ingredient/ingredient.jsx";
import ModalBase from "../modal-base/modal-base.jsx";
import IngredientDetails from "../ingredient-details/ingredient-details.jsx";
import styles from "./group-ingredients.module.css";
import PropTypes from "prop-types";

function GroupIngredients({ groupData}) {
  console.log(groupData);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  }

  const closeModal = () => {
    setIsOpenModal(false);
  }

  return (
    <ul className={`pr-2 pb-10 pl-4 ${styles.group}`}>
      { groupData.map((element) => {
          return ( 
            <>
              <Ingredient openModal = {openModal} ingredientData = {element} key = {element._id} />
              { isOpenModal && (
                <ModalBase closeModal={closeModal}>
                  <IngredientDetails ingredient = {element}  key = {element._id}/>
                </ModalBase>) 
              }
            </>);
        })
      }  
    </ul>
  );

}

GroupIngredients.propTypes = { 
  groupData: PropTypes.arrayOf(ingredientPropType).isRequired
}

export default GroupIngredients;