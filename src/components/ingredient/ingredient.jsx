import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredient.module.css";
import { ingredientPropType } from "../../utils/prop-types.js";
import PropTypes from "prop-types";

function Ingredient({openModal, ingredientData}) {

  return (
    <li className={styles.ingredient} onClick={openModal} >
      <Counter count={1} size="default" extraClass="m-1" />
      <img src= {ingredientData.image} alt={ingredientData.name}/>
      <div className={`pt-2 pb-2 ${styles.price}`}>
        <p className="text text_type_digits-default">{ingredientData.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`text text_type_main-default ${styles.name}`}>{ingredientData.name}</p>
    </li>
  );
  
}

Ingredient.propTypes = { 
  ingredientData: ingredientPropType.isRequired, 
  openModal: PropTypes.func.isRequired
}

export default Ingredient;