import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { INVALID_OR_MISSING_TOKEN } from "../../utils/constants";
import { TStore } from "../../services/store";
import OrdersList from "../../components/orders-list/orders-list";
import { startHistoryConnection, finishHistoryConnection } from "../../services/actions/socket-history";
import { TResponseGetOrderData } from "../../services/types/order-get";
import { tokenUpdate } from "../../services/actions/token-update";
import styles from "./order-history.module.css";

function OrderHistoryPage() {
  
  const dispatch = useDispatch();

  const getOrderHistoryData = (store: TStore) => store.orderHistoryData;
  const { wsHistoryConnected, wsHistoryMessages, wsHistoryError } = useSelector(getOrderHistoryData);

  useEffect(() => {
    dispatch(startHistoryConnection());
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(finishHistoryConnection());
    }
  }, []);

  if (wsHistoryMessages && wsHistoryMessages.message === INVALID_OR_MISSING_TOKEN) {
    dispatch(tokenUpdate());
    dispatch(startHistoryConnection());
  }

  if (wsHistoryConnected && !wsHistoryMessages && !wsHistoryError) {
    return <p className="text text_type_main-medium"> Загрузка... </p>
  } else if (wsHistoryError) {
    return <p className="text text_type_main-medium"> При обработке запроса возникла ошибка. Обновите страничку. </p>
  } else if (wsHistoryMessages) {
    const historyListData: Array<TResponseGetOrderData> = wsHistoryMessages.orders;
    return (
      <main className={`pt-10 ${styles.box}`}>
        <OrdersList ordersListData={historyListData} />
      </main>   
    )
  } else {
    return null;
  }

}

export default OrderHistoryPage;