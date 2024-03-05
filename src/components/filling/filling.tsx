import { FC } from "react";
import { DragIcon, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch } from "../../hooks/hooks";
import { TIngredientDataWithLocalId } from "../../services/types/burger-constructor";
import { deleteIngredient, moveIngredient } from "../../services/actions/burger-constructor";
import styles from "./filling.module.css";

type TFillingProps = {
  ingredientData: TIngredientDataWithLocalId;
};

const Filling: FC<TFillingProps> = ({ ingredientData }) => {

  const dispatch = useDispatch();
  
  const removeIngredient = (ingredientData: TIngredientDataWithLocalId) => {
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
    drop(dragIngredientId: number) {
      dispatch(moveIngredient(dragIngredientId, dropIngredientId))
    },
    collect: monitor => ({
        isHover: monitor.isOver(),
    })
  });

  const highlightBox = isHover ? (styles.box_highlight) : "";

  return (
    <>
    { !isDrag &&
    (<li className={highlightBox} ref={dropTarget}> 
      <div className={`pb-4 ${styles.string}`} key={ingredientData._localId} ref={dragRef}>  
        <DragIcon type="primary" />
        <ConstructorElement
          text= {ingredientData.name}
          price={ingredientData.price}
          thumbnail={ingredientData.image}
          handleClose={() => {removeIngredient(ingredientData)}}
        />
      </div>
    </li>) 
    }
    </>       
  )
  
}

export default Filling;