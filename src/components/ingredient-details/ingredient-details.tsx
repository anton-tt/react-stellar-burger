import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { TStore } from "../../services/store";
import styles from "./ingredient-details.module.css";

type TIngredientDetailsProps = {
  newPage: boolean;
};

function IngredientDetails({ newPage }: TIngredientDetailsProps) {

  const getIngredientsData = (store: TStore) => store.ingredientsData;
  const { ingredientsData, ingredientsRequest, ingredientsFailed } = useSelector(getIngredientsData);

  const ingredientIdData = useParams();

  const ingredient = ingredientsData.find((item) => {
    if (item._id === ingredientIdData.id) {
      return item;
    }});

  if (!ingredientIdData || !ingredient) 
    return null; 
  
  if (ingredientsRequest) {
    return <p className="pt-30 text text_type_main-medium"> Загрузка...</p>
  } else {
    return (
      <section  className={`pt-30 ${styles.box}`}>
        <h2 className={`text text_type_main-large`}>Детали ингредиента</h2>
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

}
      
export default IngredientDetails;