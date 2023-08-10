import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BurgerIngredients from "../burger-ingredients/burger-ingredients.jsx"
import BurgerConstructor from "../burger-constructor/burger-constructor.jsx"
import styles from "./burger-constructor-container.module.css";

function BurgerConstructorContainer() {

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