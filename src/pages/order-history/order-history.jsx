import OrdersList from "../../components/orders-list/orders-list.jsx";
import styles from "./order-history.module.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startHistoryConnection, finishHistoryConnection } from "../../services/actions/socket-history.js";
import { tokenUpdate } from "../../services/actions/token-update.js";
import { ACCESS_TOKEN, WS_FEED_CONNECTION_START, WS_FEED_CONNECTION_SUCCESS, WS_FEED_CONNECTION_ERROR, WS_FEED_CONNECTION_CLOSED, 
  WS_FEED_CONNECTION_FINISH, WS_FEED_GET_MESSAGE, WS_FEED_SEND_MESSAGE } from "../../utils/constants.js";
  import { getCookie } from "../../utils/cookie.js";
function OrderHistoryPage() {
  let accessToken = getCookie(ACCESS_TOKEN);
  console.log(accessToken);
  const dispatch = useDispatch();

  const getOrderHistoryData = (store) => store.orderHistoryData;
  const { wsHistoryConnected, wsHistoryMessages, wsHistoryError } = useSelector(getOrderHistoryData);

 //let n = false;

  useEffect(() => {
    //dispatch(tokenUpdate());
    //let accessToken = getCookie(ACCESS_TOKEN);
    dispatch(startHistoryConnection());
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(finishHistoryConnection());
    }
  }, []);


  //console.log("gggggg");
//  console.log(wsHistoryMessages);
  //if (wsHistoryMessages && wsHistoryMessages.message === "Invalid or missing token") {
  //  dispatch(tokenUpdate());
   // dispatch(startHistoryConnection());
  //  }

   /* useEffect(() => {
      console.log(4444);
      dispatch(finishHistoryConnection());
      dispatch(startHistoryConnection());
    }, [n]);*/
    
  const historyListData = wsHistoryMessages && wsHistoryMessages.orders;
 // let isEmptyWsFeedMessages = Object.keys(historyListData.length) === 0;
//console.log(wsHistoryMessages);
 if (!wsHistoryConnected) {
    return <p className="text text_type_main-medium"> Загрузка... </p>
  
  } else if (wsHistoryError) {
    return <p className="text text_type_main-medium"> При обработке запроса возникла ошибка. Обновите страничку. </p>
  } else {
  return (
    <main className={`pt-10 ${styles.box}`}>
      <OrdersList ordersListData={historyListData} />
    </main>   
  )
  }
}

export default OrderHistoryPage;