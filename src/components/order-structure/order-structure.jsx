import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { FormattedDate, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order-structure.module.css";
import IngredientLines from "../ingredient-lines/ingredient-lines.jsx";
import { STRING_EMPTY, STATUS_CREATED, STATUS_PENDING, STATUS_DONE, ORDER_CREATED, ORDER_PENDING, 
  ORDER_DONE } from "../../utils/constants.js";
  import { getOrder } from "../../services/actions/order-get.js";
  import { useMemo, useEffect } from "react";
  
  
  function OrderStructure({newPage}) {

    useEffect(() => {
      console.log('Я вызываюсь на каждый рендер')
    });
  const dispatch = useDispatch();
  const getOrderFeedData = (store) => store.orderFeedData;
  const { wsFeedConnected, wsFeedMessages, wsFeedError } = useSelector(getOrderFeedData);

  const getIngredientsData = (store) => store.ingredientsData;
  const { ingredientsData, ingredientsRequest, ingredientsFailed } = useSelector(getIngredientsData);

  const getOrderStructureData = (store) => store.orderStructureData;
  const { getOrderRequest, getOrderFailed, getOrderStructure, successGetOrder } = useSelector(getOrderStructureData);

  const orderNumberData = useParams();
  const orderNumber  = orderNumberData.number;
  
  let order = {};
  useEffect(() => {
    console.log("hhhh");
    dispatch(getOrder(orderNumber));
    console.log(getOrderStructure);
  }, [dispatch]);
  

  //dispatch(getOrder(orderNumber));
  order = getOrderStructure;
  if (!newPage) {
    const ordersData = wsFeedMessages.orders;
 
    order = ordersData.find((item) => {
     // console.log(item.number);

      if (item.number == orderNumber) {  
        return item;
      }});
    //if (!orderNumber || !order) return null; 
  } /*else if (newPage) {
    console.log(orderNumber);
    dispatch(getOrder(orderNumber));
    console.log(successGetOrder);
    order = getOrderStructure;
  }*/
  
  const ingredients = order?.ingredients;
  const name = order?.name;
  const status = order?.status;
  const createdAt = order?.createdAt;
  
 

  const ingredientsOneOrder = /*useMemo(() => {
    return */ingredients?.map((id) => {
      return ingredientsData.find(ingredient => ingredient._id === id);
    });
 /* }, [ingredients, ingredientsData]);*/

  let orderStatus = STRING_EMPTY;
  if (status === STATUS_CREATED) {
    orderStatus = ORDER_CREATED;
  } else if (status === STATUS_PENDING) {
    orderStatus = ORDER_PENDING;
  } else if (status === STATUS_DONE) {
    orderStatus = ORDER_DONE;
  } 

const greenString = (status === STATUS_DONE) ? `${styles.done}` : STRING_EMPTY;

const filling = useMemo(() => ingredientsOneOrder?.filter((item) => item.type !== 'bun'), [ingredientsOneOrder]);
const bun = useMemo(() => ingredientsOneOrder?.find((item) => item.type === 'bun'), [ingredientsOneOrder]);

  const fillingPrice = filling?.map((item) => item.price)
  .reduce((currentSum, currentNumber) => currentSum + currentNumber, 0);
 /* if (!orderIdData || !order) 
  return null; */
  //const bunPrice = bun.price * 2;

  let orderPrice = 0;
  fillingPrice && (orderPrice = fillingPrice +  bun.price * 2);
  if (getOrderRequest) {
    return <p className="pt-30 text text_type_main-medium"> Загрузка...</p>
  } else {
    return (
      <section  className={styles.box}>
       
        <div className={styles.text}>
          <p className={`pb-10 text text_type_digits-default ${styles.number}`}> {`#${orderNumber}`}  </p>
          <h3 className="text text_type_main-medium"> {name} </h3> 
          <p className={`pt-3 text text_type_main-small ${greenString}`}> {orderStatus} </p>
          <h3 className="pt-15 pb-6 text text_type_main-medium"> Состав: </h3> 
        </div>
        <div className={styles.ingredients}>
          <IngredientLines bunData={bun} fillingData={filling} />
        </div>


      <div  className={styles.footer}>
        <p className="text text_type_main-small text_color_inactive"> 
          {<FormattedDate date={new Date(createdAt)} />} 
        </p>
        <div className={styles.price}>
          <p className="text text_type_digits-default pr-2"> {orderPrice} </p>
          <CurrencyIcon type="primary"/>
        </div>
      </div>

      </section>
    );
  }

}
      
export default OrderStructure;