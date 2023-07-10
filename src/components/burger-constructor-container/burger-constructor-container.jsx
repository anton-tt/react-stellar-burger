import BurgerIngredients from "../burger-ingredients/burger-ingredients.jsx"
import BurgerConstructor from "../burger-constructor/burger-constructor.jsx"
import styles from "./burger-constructor-container.module.css";

function BurgerConstructorContainer({data}) {

  return (
    <main className={styles.page}>
      <BurgerIngredients ingredientsData = {data}/>
      <BurgerConstructor ingredientsData = {data} />
    </main>  
  )

}

export default BurgerConstructorContainer;