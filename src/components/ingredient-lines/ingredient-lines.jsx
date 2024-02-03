import {  useMemo } from "react";
import { useSelector } from 'react-redux';
import { useDrag } from "react-dnd";
import { Link, useLocation } from "react-router-dom";
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { INGREDIENTS_PATH } from "../../utils/constants.js";
import styles from "./ingredient-lines.module.css";
import { ingredientPropType } from "../../utils/prop-types.js";
import PropTypes from "prop-types";

function IngredientLines({bunData, fillingData}) {
  
  //const bunData = useMemo(() => ingredientsData?.find((item) => item.type === 'bun'), [ingredientsData]);
  //const fillingsData = useMemo(() => ingredientsData?.filter((item) => item.type !== 'bun'), [ingredientsData]);
//const bun= bunData.[0];
//console.log(bun);
  if (bunData) {
  return ( 
    <ul className={styles.components}>
      
      <li className={styles.element} key={bunData._id}>
        <div className={styles.component}>
          <img className={styles.image} src={bunData.image_mobile} />    
          <p  className="pl-4 text text_type_main-small"> {bunData.name} </p>
        </div>
        <div  className={styles.component}>  
          <p className={`text text_type_digits-default ${styles.count}`}> 2 x {bunData.price} </p>    
          <CurrencyIcon type="primary"/>
        </div>
      </li>

      {fillingData ? (fillingData.map((element) => {
        return ( 
          <li className={styles.element} key={element._id}>
            <div className={styles.component}>
              <img  className={styles.image} src={element.image_mobile} />    
              <p className="pl-4 text text_type_main-small"> {element.name} </p>
            </div>
            <div  className={styles.component}>
              <p className={`text text_type_digits-default ${styles.count}`}> 1 x {element.price} </p>
              <CurrencyIcon type="primary"/> 
            </div>
          </li>);
        })
      ) : null}   

    </ul>
  );
      }else {
        return  null
      }
}

export default IngredientLines;