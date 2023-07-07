import Tabs from "../tabs/tabs.jsx";
import GroupIngredients from "../group-ingredients/group-ingredients.jsx";
import styles from "./burger-ingredients.module.css";
import { ingredientPropType } from "../../utils/prop-types.js";
import PropTypes from "prop-types";

function BurgerIngredients({ingredientsData}) {

  const bunsData = ingredientsData.filter((item) => item.type === 'bun');
  const saucesData = ingredientsData.filter((item) => item.type === 'sauce');
  const mainsData = ingredientsData.filter((item) => item.type === 'main');
 
  return (
    <section className={`pt-10 ${styles.box}`}>
      <h1 className="text text_type_main-large pb-5"> Соберите бургер </h1>
      
      <Tabs />
        
      <ul className={`pt-10 ${styles.ingredients}`}> 
        <li>
          <h2 className="text text_type_main-default pb-6"> Булки </h2>
          <GroupIngredients groupData = {bunsData} />
        </li>
        <li>
          <h2 className="text text_type_main-default pb-6"> Соусы </h2>
          <GroupIngredients groupData = {saucesData} />
        </li>  
        <li>
          <h2 className="text text_type_main-default pb-6"> Начинки </h2>
          <GroupIngredients groupData = {mainsData} />
        </li>
      </ul> 
    </section>
  );

}

BurgerIngredients.propTypes = { 
  ingredientsData: PropTypes.arrayOf(ingredientPropType).isRequired 
}

export default BurgerIngredients;