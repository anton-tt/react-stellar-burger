import OrdersList from "../../components/orders-list/orders-list.jsx";
import styles from "./order-history.module.css";

function OrderHistoryPage() {
  
  const ordersListData = [ {}, {}, {}, {} ];
 
  return (
    <main className={`pt-10 ${styles.box}`}>
      <OrdersList ordersListData={ordersListData} />
    </main>   
  )

}

export default OrderHistoryPage;