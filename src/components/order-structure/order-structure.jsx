import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./ingredient-details.module.css";

function OrderStructure() {

  /*const getIngredientsData = (store) => store.ingredientsData;
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
  } else {*/
    return (
      <section  className={styles.box}>
       
       <div className={styles.text}>
       <p className="text text_type_digits-default pb-10">#4545454545  </p>
        <h3 className="text text_type_main-medium"> Чудо Космос Бургер </h3> 
        <p className="pt-3 text text_type_main-small"> Создан </p>
        <h3 className="pt-15 pb-6 text text_type_main-medium"> Состав: </h3> 
      </div>
<div>

</div>

<div  className={styles.components}>
  <p className="text text_type_main-small text_color_inactive">23/56/2009  </p>
  <div className={styles.price}>
        <p className="text text_type_digits-default">1000</p>
        <CurrencyIcon type="primary"/>
        </div>
</div>

      </section>
    );
  //}

}
      
export default OrderStructure;