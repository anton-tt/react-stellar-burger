import { DragIcon, ConstructorElement  } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from 'react-redux';
import { useDrag, useDrop } from "react-dnd";
import styles from "./filling.module.css";
import { deleteIngredient, updateIngredient } from "../../services/actions/burger-constructor.js";
import { deletePrice } from "../../services/actions/order-price.js";
import { ingredientPropType } from "../../utils/prop-types.js";

function Filling({ingredientData}) {
  
  const dispatch = useDispatch();
  
  const removeIngredient = (ingredientData) => {
    dispatch(deleteIngredient(ingredientData));
    dispatch(deletePrice(ingredientData));
  }

  const dragData = {dragIngredientId: ingredientData._localId};
  const [, dragRef] = useDrag({
    type: "filling",
    item: dragData
  });
  
  const dropIngredientId = ingredientData._localId;
  const [, dropTarget] = useDrop({
    accept: "filling",
    drop( {dragIngredientId} ) {
      dispatch(updateIngredient(dragIngredientId, dropIngredientId))
    }
  });

  return (
    <li ref={dropTarget}> 
      <div className={`pb-4 ${styles.string}`} key={ingredientData._localId} ref={dragRef}>  
        <DragIcon type="primary" />
        <ConstructorElement
          text= {ingredientData.name}
          price={ingredientData.price}
          thumbnail={ingredientData.image}
          handleClose={() => {removeIngredient(ingredientData)}}
        />
      </div>
    </li>         
  )
  
}

Filling.propTypes = { 
  ingredientData: ingredientPropType.isRequired
}  

export default Filling;