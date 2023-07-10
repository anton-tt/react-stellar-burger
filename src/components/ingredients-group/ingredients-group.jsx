import { useState } from "react";
import Ingredient from "../ingredient/ingredient.jsx";
import ModalBase from "../modal-base/modal-base.jsx";
import IngredientDetails from "../ingredient-details/ingredient-details.jsx";
import styles from "./ingredients-group.module.css";
import { ingredientPropType } from "../../utils/prop-types.js";
import PropTypes from "prop-types";

function IngredientsGroup({groupData}) {
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
              <Ingredient openModal = {openModal} ingredientData={element} key={element._id} />
              { isOpenModal && (
                <ModalBase closeModal={closeModal}>
                  <IngredientDetails ingredient={element}  key={element._id} />
                </ModalBase>) 
              }
            </>);
        })
      }  
    </ul>
  );

}

IngredientsGroup.propTypes = { 
  groupData: PropTypes.arrayOf(ingredientPropType).isRequired
}

export default IngredientsGroup;