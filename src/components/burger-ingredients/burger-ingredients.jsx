import { useMemo, useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useInView } from "react-intersection-observer";
import Tabs from "../tabs/tabs.jsx";
import IngredientsGroup from "../ingredients-group/ingredients-group.jsx";
import styles from "./burger-ingredients.module.css";

function BurgerIngredients() {
  
  const getIngredientsData = (store) => store.ingredientsData;
  const { ingredientsData, ingredientsRequest, ingredientsFailed } = useSelector(getIngredientsData);

  const bunsData = useMemo(() => ingredientsData.filter((item) => item.type === 'bun'), [ingredientsData]);
  const saucesData = useMemo(() => ingredientsData.filter((item) => item.type === 'sauce'), [ingredientsData]);
  const mainsData = useMemo(() => ingredientsData.filter((item) => item.type === 'main'), [ingredientsData]);

  const [state, setState] = useState("buns");
  const [bunsRef, bunsInView] = useInView({ threshold: 0.1 });
  const [saucesRef, saucesInView] = useInView({ threshold: 0.1 });
  const [mainsRef, mainsInIView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (bunsInView) {
      setState("buns")
    } else if (saucesInView) {
      setState("sauces")
    } else if (mainsInIView) {
      setState("mains")
    }
  }, [bunsInView, saucesInView, mainsInIView])

  if (ingredientsFailed) {
    return <p className="text text_type_main-medium">Произошла ошибка при получении данных</p>
  } else if (ingredientsRequest) {
    return <p className="text text_type_main-medium">Загрузка...</p>
  } else {
    return (
      <section className={`pt-10 ${styles.box}`}>
        <h1 className="text text_type_main-large pb-5"> Соберите бургер </h1>
      
        <Tabs state={state} />
        
        <ul className={`pt-10 ${styles.ingredients}`}> 
          <li>
            <h2 className="text text_type_main-default pb-6" ref={bunsRef}> Булки </h2>
            <IngredientsGroup groupData={bunsData} />
          </li>
          <li>
            <h2 className="text text_type_main-default pb-6" ref={saucesRef}> Соусы </h2>
            <IngredientsGroup groupData={saucesData} />
          </li>  
          <li>
            <h2 className="text text_type_main-default pb-6" ref={mainsRef}> Начинки </h2>
            <IngredientsGroup groupData={mainsData} />
          </li>
        </ul> 
      </section>
    );
  }

}

export default BurgerIngredients;