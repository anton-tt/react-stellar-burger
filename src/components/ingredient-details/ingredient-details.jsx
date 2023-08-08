import { useSelector } from 'react-redux';
import styles from "./ingredient-details.module.css";

function IngredientDetails() {
  const getIngredientData = (store) => store.ingredient;
  const { ingredient } = useSelector(getIngredientData);

  return (
    <section  className={styles.box}>
      <h2 className={`text text_type_main-large ${styles.header}`}>Детали ингредиента</h2>
      <img className={`mb-4 ${styles.picture}`} src={ingredient.image}/>
      <h3 className={`pb-8 text text_type_main-medium ${styles.name}`}>{ingredient.name}</h3>
      <ul className={styles.list}>
        <li className={styles.item}>
          <p className="text text_type_main-default text_color_inactive"> Калории, ккал </p>
          <p className="text text_type_digits-default text_color_inactive">{ingredient.calories}</p>
        </li>
        <li className={styles.item}>
          <p className="text text_type_main-default text_color_inactive"> Белки, г </p>
          <p className="text text_type_digits-default text_color_inactive">{ingredient.proteins}</p>
        </li>
        <li className={styles.item}>
          <p className="text text_type_main-default text_color_inactive"> Жиры, г </p>
          <p className="text text_type_digits-default text_color_inactive">{ingredient.fat}</p>
        </li>
        <li className={styles.item}>
          <p className="text text_type_main-default text_color_inactive"> Углеводы, г </p>
          <p className="text text_type_digits-default text_color_inactive">{ingredient.carbohydrates}</p>
        </li>
      </ul>
    </section>
  );

}
      
export default IngredientDetails;