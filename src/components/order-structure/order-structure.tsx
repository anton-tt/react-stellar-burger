import { useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { FormattedDate, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { TStore } from "../../services/store";
import { STRING_EMPTY, STATUS_CREATED, STATUS_PENDING, STATUS_DONE, ORDER_CREATED, ORDER_PENDING, ORDER_DONE, ORDER_HISTORY_PAGE, 
  ORDER_FEED_PAGE } from "../../utils/constants";
import IngredientLines from "../ingredient-lines/ingredient-lines";
import { TResponseGetOrderData } from "../../services/types/order-get";
import { getOrder } from "../../services/actions/order-get";
import styles from "./order-structure.module.css";

type TOrderStructureProps = {
  newPage: boolean;
};

function OrderStructure({newPage}: TOrderStructureProps) {

  const location = useLocation();
  const prevPage = location.state?.prev;

  const dispatch = useDispatch();

  const getOrderFeedData = (store: TStore) => store.orderFeedData;
  const { wsFeedConnected, wsFeedMessages, wsFeedError } = useSelector(getOrderFeedData);

  const getOrderHistoryData = (store: TStore) => store.orderHistoryData;
  const { wsHistoryConnected, wsHistoryMessages, wsHistoryError } = useSelector(getOrderHistoryData);

  const getIngredientsData = (store: TStore) => store.ingredientsData;
  const { ingredientsData, ingredientsRequest, ingredientsFailed } = useSelector(getIngredientsData);

  const getOrderStructureData = (store: TStore) => store.orderStructureData;
  const { getOrderRequest, getOrderFailed, getOrderData, getOrderSuccess } = useSelector(getOrderStructureData);

  const orderNumberData = useParams().number;
  const orderNumber  = orderNumberData ? +orderNumberData : -1;
  
  useEffect(() => {
    (newPage) && (orderNumber !== -1) && dispatch(getOrder(orderNumber));
  }, [dispatch]);
  
  let order: TResponseGetOrderData | undefined;
  if (prevPage === ORDER_FEED_PAGE) {
    const ordersData = wsFeedMessages?.orders;
    order = ordersData?.find((item) => item.number === orderNumber);
  } else if (prevPage === ORDER_HISTORY_PAGE) {
    const ordersData = wsHistoryMessages?.orders;
    order = ordersData?.find((item) => item.number === orderNumber);
  } else  {
    order = getOrderData;
  }
  
  const ingredients = order?.ingredients;
  const name = order?.name;
  const status = order?.status;
  const createdAt = order?.createdAt ? order.createdAt : "";
  
  const ingredientsOneOrder = ingredients?.map((id) => {
      return ingredientsData.find(ingredient => ingredient._id === id);
    });

  const filling = useMemo(() => ingredientsOneOrder?.filter((item) => item?.type !== 'bun'), [ingredientsOneOrder]);
  const bun = useMemo(() => ingredientsOneOrder?.find((item) => item?.type === 'bun'), [ingredientsOneOrder]);
  const fillingPrice = filling?.map((item) => item ? item.price : 0)
    .reduce((currentSum, currentNumber) => currentSum + currentNumber, 0);
  let orderPrice = 0;
  const bunPrice = bun ? (bun.price * 2) : 0;
  fillingPrice && (orderPrice = fillingPrice + bunPrice);

  let orderStatus = STRING_EMPTY;
  if (status === STATUS_CREATED) {
    orderStatus = ORDER_CREATED;
  } else if (status === STATUS_PENDING) {
    orderStatus = ORDER_PENDING;
  } else if (status === STATUS_DONE) {
    orderStatus = ORDER_DONE;
  } 

  const greenString = (status === STATUS_DONE) ? `${styles.done}` : STRING_EMPTY;

  if (getOrderRequest) {
    return <p className="pt-30 text text_type_main-medium"> Загрузка...</p>
  } else if (getOrderFailed) {
    return <p className="text text_type_main-medium"> При обработке запроса возникла ошибка. Обновите страничку. </p>
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