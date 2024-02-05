import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import OrdersList from "../../components/orders-list/orders-list.jsx";
import OrdersStat from "../../components/orders-stat/orders-stat.jsx";
import { startFeedConnection, finishFeedConnection } from "../../services/actions/socket-feed.js";
import styles from "./order-feed.module.css";

function OrderFeedPage() {
 
  const dispatch = useDispatch();

  const getOrderFeedData = (store) => store.orderFeedData;
  const { wsFeedConnected, wsFeedMessages, wsFeedError } = useSelector(getOrderFeedData);

  const isEmptyWsFeedMessages = Object.keys(wsFeedMessages).length === 0;

  useEffect(() => {
    dispatch(startFeedConnection());
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(finishFeedConnection());
    }
  }, []);
   
  if (isEmptyWsFeedMessages) {
    return <p className="text text_type_main-medium"> Загрузка... </p>
  } else if (wsFeedError) {
    return <p className="text text_type_main-medium"> При обработке запроса возникла ошибка. Обновите страничку. </p>
  } else {

    const ordersListData = wsFeedMessages.orders;
    const totalOrders = wsFeedMessages.total;
    const totalTodayOrders = wsFeedMessages.totalToday;

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
  }

}

export default OrderFeedPage;