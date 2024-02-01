import { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { FormattedDate, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import RoundImages from "../round-images/round-images.jsx";
import styles from "./order-card.module.css";

function OrderCard({orderData}) {
//console.log(orderData);
  const location = useLocation();

  const { ingredients, name, status, number, createdAt } = orderData;

  const getIngredientsData = (store) => store.ingredientsData;
  const { ingredientsData, ingredientsRequest, ingredientsFailed } = useSelector(getIngredientsData);

  const ingredientsOneOrder = useMemo(() => {
    return ingredients.map((id) => {
      return ingredientsData.find(ingredient => ingredient._id === id);
    });
  }, [ingredients, ingredientsData]);
 
 // console.log(ingredientsOneOrder);
const orderPrice = ingredientsOneOrder.map((item) => item.price)
  .reduce((currentSum, currentNumber) => currentSum + currentNumber, 0);

  
  return ( 
    <Link className={styles.link} state={{ background: location }}>
  
    <div className={styles.order}>
      <div className={styles.info}>
        <p className="text text_type_digits-default"> {`#${number}`} </p>
        <p className="text text_type_main-small text_color_inactive"> 
          {<FormattedDate date={new Date(createdAt)} />} 
        </p>
      </div>
      <div className={styles.text}>
        <h3 className="text text_type_main-medium"> {name} </h3> 
        <p className="pt-2 text text_type_main-small"> Создан </p>
      </div>
      <div className={styles.components}>
        <div className={styles.cat}>
          <RoundImages ingredients={ingredientsOneOrder}  />
        </div>
        <div className={styles.price}>
        <p className="text text_type_digits-default"> {orderPrice} </p>
        <CurrencyIcon type="primary"/>
        </div>
        
  
      </div>
  
      </div>
     
  
  </Link>
  
   
  
    );
    /*return ( 
  
  
  <Link to={`/feed/${orderData._id}`} state={{ background: location }} className={styles.link}>

  <div className={styles.order}>
    <div className={styles.order}>
      <p> {orderData.number} </p>
      <p> <FormattedDate date={new Date(orderData.createdAt)} /> </p>
    </div>
    <div>
      <h3> {orderData.name} </h3> 
    </div>
    <div>
      <div></div>
      <div>
      <p></p>
      </div>
      
      <p></p>

    </div>

    </div>
   

</Link>

 

  );*/
  
}


export default OrderCard;


/*{((ingredientCount > 0) || isDrag) ?  (  
          <Counter count={ingredientCount} size="default" extraClass="m-1" />
        ) : null} 
        <img src= {ingredientData.image} alt={ingredientData.name}/>
        <div className={`pt-2 pb-2 ${styles.price}`}>
          <p className="text text_type_digits-default">{ingredientData.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className={`${styles.name} text text_type_main-default`}>{ingredientData.name}</p>
      </div>
*/

