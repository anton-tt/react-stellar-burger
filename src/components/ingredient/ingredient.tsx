import {  useMemo } from "react";
import { useSelector } from 'react-redux';
import { useDrag } from "react-dnd";
import { Link, useLocation } from "react-router-dom";
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { TStore } from "../../services/store";
import { TResponseIngredientData } from "../../services/types/burger-ingredients";
import { INGREDIENTS_PATH } from "../../utils/constants";
import styles from "./ingredient.module.css";

type TIngredientProps = { 
  openModal: (ingredientData: TResponseIngredientData) => void;
  ingredientData: TResponseIngredientData;
};

function Ingredient({openModal, ingredientData}: TIngredientProps) {
  const location = useLocation();
  
  const [{isDrag}, dragRef] = useDrag({
    type: "ingredient",
    item: ingredientData,
    collect: monitor => ({
        isDrag: monitor.isDragging()
    })
  });

  const getConstructorData = (store: TStore) => store.constructorData;
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

  const highlightBox = isDrag ? (styles.box_highlight) : null; 

  return ( 
    <Link to={`${INGREDIENTS_PATH}/${ingredientData._id}`} state={{ background: location }} className={styles.link}>

      <div className={`${styles.ingredient} ${highlightBox}`} onClick={() => openModal} ref={dragRef} >
        {((ingredientCount > 0) || isDrag) ?  (  
          <Counter count={ingredientCount} size="default" extraClass="m-1" />
        ) : null} 
        <img src= {ingredientData.image} alt={ingredientData.name}/>
        <div className={`pt-2 pb-2 ${styles.price}`}>
          <p className="text text_type_digits-default">{ingredientData.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className={`${styles.name} text text_type_main-default`}>{ingredientData.name}</p>
      </div>

    </Link>
  );
  
}

export default Ingredient;