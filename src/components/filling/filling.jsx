import { DragIcon, ConstructorElement  } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from 'react-redux';
import { useDrag, useDrop } from "react-dnd";
import styles from "./filling.module.css";
import { deleteIngredient, moveIngredient } from "../../services/actions/burger-constructor.js";
import { ingredientPropType } from "../../utils/prop-types.js";

function Filling({ingredientData}) {
  
  const dispatch = useDispatch();
  
  const removeIngredient = (ingredientData) => {
    dispatch(deleteIngredient(ingredientData));
  }

  const dragData = {dragIngredientId: ingredientData._localId};
  const [{isDrag}, dragRef] = useDrag({
    type: "filling",
    item: dragData,
    collect: monitor => ({
        isDrag: monitor.isDragging()
    })
  });
  
  const dropIngredientId = ingredientData._localId;
  const [{isHover}, dropTarget] = useDrop({
    accept: "filling",
    drop( {dragIngredientId} ) {
      dispatch(moveIngredient(dragIngredientId, dropIngredientId))
    },
    collect: monitor => ({
        isHover: monitor.isOver(),
    })
  });

  const highlightBox = isHover ? (styles.box_highlight) : null;

  return (
    !isDrag &&
    <li className={highlightBox} ref={dropTarget}> 
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