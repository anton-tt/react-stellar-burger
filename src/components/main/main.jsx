import BurgerIngredients from "../burger-ingredients/burger-ingredients.jsx"
import BurgerConstructor from "../burger-constructor/burger-constructor.jsx"
import styles from "./main.module.css";

function Main({data}) {

  return (
    <main className={styles.page}>
      <BurgerIngredients ingredientsData = {data}/>
      <BurgerConstructor ingredientsData = {data} />
    </main>  
  )

}

export default Main;