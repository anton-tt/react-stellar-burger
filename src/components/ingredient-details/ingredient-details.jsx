import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./ingredient-details.module.css";

import { useMemo, useEffect, useState } from "react";
import { useDispatch } from 'react-redux';

import { getIngredientsList } from "../../services/actions/burger-ingredients.js";


function IngredientDetails() {
  
  console.log("!!!");
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getIngredientsList());
    
  }, []);
  const getIngredientsData = (store) => store.ingredientsData;
  const { ingredientsData, ingredientsRequest, ingredientsFailed } = useSelector(getIngredientsData);
  const getIngredientData = (store) => store.ingredient;
 //const { ingredient } = useSelector(getIngredientData);
  const ingredientIdData = useParams();
  console.log(ingredientIdData);

 
  console.log(ingredientsData);


  //const ingredient = useMemo(() => ingredientsData.find((item) => item._id === ingredientId), [ingredientsData]);

  const ingredient = ingredientsData.find((item) => {
    console.log(item._id);
    console.log(ingredientIdData.id);
    if (item._id === ingredientIdData.id) {
      return item;
    }});
  console.log(ingredient);

  if (!ingredientIdData || !ingredient) return null; 
  console.log(ingredient);
  if (ingredientsRequest) {
    return <p className="text text_type_main-medium">Загрузка...</p>
  } else {
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

}}
      
export default IngredientDetails;