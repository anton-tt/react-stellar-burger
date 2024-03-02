import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { INVALID_OR_MISSING_TOKEN } from "../../utils/constants.js";
import OrdersList from "../../components/orders-list/orders-list.jsx";
import { startHistoryConnection, finishHistoryConnection } from "../../services/actions/socket-history";
import { tokenUpdate } from "../../services/actions/token-update.js";
import styles from "./order-history.module.css";

function OrderHistoryPage() {
  
  const dispatch = useDispatch();

  const getOrderHistoryData = (store) => store.orderHistoryData;
  const { wsHistoryConnected, wsHistoryMessages, wsHistoryError } = useSelector(getOrderHistoryData);

  useEffect(() => {
    dispatch(startHistoryConnection());
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(finishHistoryConnection());
    }
  }, []);

  if (wsHistoryMessages?.message === INVALID_OR_MISSING_TOKEN) {
    dispatch(tokenUpdate());
    dispatch(startHistoryConnection());
  }

  const historyListData = wsHistoryMessages?.orders;
   
  if (wsHistoryConnected && !wsHistoryMessages && !wsHistoryError) {
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