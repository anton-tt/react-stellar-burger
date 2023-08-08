import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import {  useMemo } from "react";
import { useSelector } from 'react-redux';
import { useDrag } from "react-dnd";
import styles from "./ingredient.module.css";
import { ingredientPropType } from "../../utils/prop-types.js";
import PropTypes from "prop-types";

function Ingredient({openModal, ingredientData}) {

  const [, dragRef] = useDrag({
    type: "ingredient",
    item: ingredientData
  });

  const getConstructorData = (store) => store.constructorData;
  const { bunsData, fillingData } = useSelector(getConstructorData);

  const ingredientCount = useMemo(() => {
    let count = 0;
    if (ingredientData.type !== "bun") {
      count = fillingData.filter((item) => ingredientData._id === item._id).length;
    } else {
      if (bunsData !== undefined && ingredientData._id === bunsData._id) {
        count = 2;
      }
    }
    return count;
  }, [bunsData, fillingData, ingredientData]);

  return (
    <li className={styles.ingredient} onClick={openModal} ref={dragRef} >
      {(ingredientCount > 0) ? (  
        <Counter count={ingredientCount} size="default" extraClass="m-1" />
      ) : null} 
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