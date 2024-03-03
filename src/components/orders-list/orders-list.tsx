import OrderCard from "../order-card/order-card";
import { TResponseGetOrderData } from "../../services/types/order-get";
import styles from "./orders-list.module.css";

type TOrdersListProps = {
  ordersListData: Array<TResponseGetOrderData>;
};

function OrdersList({ordersListData}: TOrdersListProps) {
  
  return (
    <section className={styles.section}> 
      <ul className={styles.orders}>

      { ordersListData ? (ordersListData.map((element) => {
          return ( 
            <li className={styles.element} key={element._id}>
              <OrderCard orderData={element}/>
            </li>
          ); })
        ) : null
      }

      </ul>
    </section> 
  )

}

export default OrdersList;