import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { FormattedDate, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
//import { TStore } from "../../services/store.js";
import { STRING_EMPTY, STATUS_CREATED, STATUS_PENDING, STATUS_DONE, ORDER_CREATED, ORDER_PENDING, 
  ORDER_DONE, ORDER_FEED_PAGE } from "../../utils/constants.js";
import RoundImages from "../round-images/round-images";
import styles from "./order-card.module.css";
import rootReducer from "../../services/reducers/root-reducer.js";

type TOrderData = {
  orderData: {
    ingredients: Array<string>;
    name: string;
    status: string;
    number: number;
    createdAt: string;
  }
};


function OrderCard({ orderData }: TOrderData) {
  type TStore = ReturnType<typeof rootReducer>;  

  const location = useLocation();

  const { ingredients, name, status, number, createdAt } = orderData;

  const getIngredientsData = (store: TStore) => store.ingredientsData;
  const { ingredientsData, ingredientsRequest, ingredientsFailed } = useSelector(getIngredientsData);

  const ingredientsOneOrder = useMemo(() => {
    return ingredients.map((id) => {
      return ingredientsData.find(ingredient => (ingredient._id === id));
    });
  }, [ingredients, ingredientsData]);
  
  const filling = ingredientsOneOrder?.filter((item) => item?.type !== 'bun');
  const bun = ingredientsOneOrder?.find((item) => item?.type === 'bun');

  const fillingPrice = filling?.map((item) => item ? item.price : 0)
    .reduce((currentSum, currentNumber) => currentSum + currentNumber, 0);
  const bunPrice = bun? (bun.price * 2) : 0; 
  const orderPrice = fillingPrice + bunPrice;

  let orderStatus = STRING_EMPTY;
  if (status === STATUS_CREATED) {
    orderStatus = ORDER_CREATED;
  } else if (status === STATUS_PENDING) {
    orderStatus = ORDER_PENDING;
  } else if (STATUS_DONE) {
    orderStatus = ORDER_DONE;
  } 
  
  const greenString = (status === STATUS_DONE) ? `${styles.done}` : STRING_EMPTY;
if (ingredientsOneOrder) {
  return ( 
    <Link to={`${ORDER_FEED_PAGE}/${number}`} className={styles.link} state={{ background: location, prev: location.pathname }}  replace={false}>
  
      <div className={styles.order}>
        <div className={styles.info}>
          <p className="text text_type_digits-default"> {`#${number}`} </p>
          <p className="text text_type_main-small text_color_inactive"> 
            {<FormattedDate date={new Date(createdAt)} />} 
          </p>
        </div>

        <div className={styles.text}>
          <h3 className="text text_type_main-medium"> {name} </h3> 
          <p className={`pt-2 text text_type_main-small ${greenString}`}> {orderStatus} </p>
        </div>

        <div className={styles.components}>
          <div className={styles.images}>
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
  } else {
    return null;
  }
}
   
export default OrderCard;