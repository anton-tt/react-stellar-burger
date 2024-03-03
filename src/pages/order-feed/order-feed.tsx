import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//import { TStore } from "../../services/store.js";
import OrdersList from "../../components/orders-list/orders-list";
import OrdersStat from "../../components/orders-stat/orders-stat";
import { startFeedConnection, finishFeedConnection } from "../../services/actions/socket-feed";
import { TResponseGetOrderData } from "../../services/types/order-get.js";
import styles from "./order-feed.module.css";

import rootReducer from "../../services/reducers/root-reducer.js";
function OrderFeedPage() {
  type TStore = ReturnType<typeof rootReducer>;
 
  const dispatch = useDispatch();

  const getOrderFeedData = (store: TStore) => store.orderFeedData;
  const { wsFeedConnected, wsFeedMessages, wsFeedError } = useSelector(getOrderFeedData);

  //const isEmptyWsFeedMessages: boolean = Object.keys(wsFeedMessages).length === 0;

  useEffect(() => {
    dispatch(startFeedConnection());
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(finishFeedConnection());
    }
  }, []);

  if (wsFeedConnected && !wsFeedMessages && !wsFeedError) {
    return <p className="text text_type_main-medium"> Загрузка... </p>
  } else if (wsFeedError) {
    return <p className="text text_type_main-medium"> При обработке запроса возникла ошибка. Обновите страничку. </p>
  } else if (wsFeedMessages) {

    const ordersListData: Array<TResponseGetOrderData> = wsFeedMessages.orders;
    const totalOrders: number = wsFeedMessages.total;
    const totalTodayOrders: number = wsFeedMessages.totalToday;

    const readyOrdersData = 
      ordersListData.filter(order => order.status === "done").map((order) => order.number);
    const unreadyOrdersData = ordersListData.filter(order => order.status !== "done").map((order) => order.number);

    return (
      <main className={`${styles.box} pt-10`}>
        <h2 className="text text_type_main-large"> Лента заказов </h2>
        <div className={`${styles.container} pt-5`}>
          <OrdersList ordersListData={ordersListData} />
          <OrdersStat stats={{totalOrders, totalTodayOrders, readyOrdersData, unreadyOrdersData}} />
        </div>
      </main>   
    )
  } else {
    return null;
  }

}

export default OrderFeedPage;