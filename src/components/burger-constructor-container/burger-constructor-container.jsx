import BurgerIngredients from "../burger-ingredients/burger-ingredients.jsx"
import BurgerConstructor from "../burger-constructor/burger-constructor.jsx"
import styles from "./burger-constructor-container.module.css";

function BurgerConstructorContainer() {

  return (
    <main className={styles.page}>
      <BurgerIngredients/>
      <BurgerConstructor/>
    </main>  
  )

}

export default BurgerConstructorContainer;