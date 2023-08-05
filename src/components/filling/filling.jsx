import { DragIcon, ConstructorElement  } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./filling.module.css";
import { ingredientPropType } from "../../utils/prop-types.js";
import PropTypes from "prop-types";

import { addIngredient, deleteIngredient } from "../../services/actions/burger-constructor.js";
import { useSelector, useDispatch } from 'react-redux';

import { addPrice, deletePrice } from "../../services/actions/order-price.js";
function Filling({fillingData}) {
  

  const dispatch = useDispatch();

  const removeIngredient = (ingredientData) => {
    dispatch(deleteIngredient(ingredientData));
    dispatch(deletePrice(ingredientData));
  } 





  return (
    <ul className={`pr-2 ${styles.filling} `}>
      { fillingData.map((element) => {
        return  (
          <li className={`pb-4 ${styles.string}`} key = {element._localId}>     
            <DragIcon type="primary" />
            <ConstructorElement
              text= {element.name}
              price={element.price}
              thumbnail={element.image}
              handleClose={() => {removeIngredient(element)}}
            />
          </li>
        )})
      }  
    </ul>
  )
  
}

Filling.propTypes = { 
  fillingData: PropTypes.arrayOf(ingredientPropType).isRequired 
}   

export default Filling;