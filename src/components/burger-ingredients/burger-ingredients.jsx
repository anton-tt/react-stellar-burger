import { useMemo, useEffect, useContext } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Tabs from "../tabs/tabs.jsx";
import IngredientsGroup from "../ingredients-group/ingredients-group.jsx";
import styles from "./burger-ingredients.module.css";
import { getIngredientsList } from "../../services/actions/burger-ingredients.js";

function BurgerIngredients() {
  
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getIngredientsList())
  }, []);
  const { ingredientsData, ingredientsRequest, ingredientsFailed } = useSelector((store) => store.ingredientsData);

  const bunsData = useMemo(() => ingredientsData.filter((item) => item.type === 'bun'), [ingredientsData]);
  const saucesData = useMemo(() => ingredientsData.filter((item) => item.type === 'sauce'), [ingredientsData]);
  const mainsData = useMemo(() => ingredientsData.filter((item) => item.type === 'main'), [ingredientsData]);
 
  if (ingredientsFailed) {
    return <p className="text text_type_main-medium">Произошла ошибка при получении данных</p>
  } else if (ingredientsRequest) {
    return <p className="text text_type_main-medium">Загрузка...</p>
  } else {
    return (
      <section className={`pt-10 ${styles.box}`}>
        <h1 className="text text_type_main-large pb-5"> Соберите бургер </h1>
      
        <Tabs />
        
        <ul className={`pt-10 ${styles.ingredients}`}> 
          <li>
            <h2 className="text text_type_main-default pb-6"> Булки </h2>
            <IngredientsGroup groupData = {bunsData} />
          </li>
          <li>
            <h2 className="text text_type_main-default pb-6"> Соусы </h2>
            <IngredientsGroup groupData = {saucesData} />
          </li>  
          <li>
            <h2 className="text text_type_main-default pb-6"> Начинки </h2>
            <IngredientsGroup groupData = {mainsData} />
          </li>
        </ul> 
      </section>
    );
  }

}

export default BurgerIngredients;

/*
import { useContext } from "react";
import { AppContext } from "../../services/app-context.js";
import { ingredientPropType } from "../../utils/prop-types.js";
import PropTypes from "prop-types";

const ingredientsData = useContext(AppContext);
BurgerIngredients.propTypes = { 
  ingredientsData: PropTypes.arrayOf(ingredientPropType).isRequired 
*/