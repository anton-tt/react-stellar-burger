import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BurgerIngredients from "../burger-ingredients/burger-ingredients.jsx"
import BurgerConstructor from "../burger-constructor/burger-constructor.jsx"
import styles from "./burger-constructor-container.module.css";
import { getUser } from "../../services/actions/user-get.js";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

function BurgerConstructorContainer() {




  /*const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);*/

  return (
    <main className={styles.page}>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients/>
        <BurgerConstructor/>
      </DndProvider>
    </main>  
  )

}

export default BurgerConstructorContainer;