import OrderCard from "../order-card/order-card.jsx";
import styles from "./orders-list.module.css";

function OrdersList({ordersListData}) {

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