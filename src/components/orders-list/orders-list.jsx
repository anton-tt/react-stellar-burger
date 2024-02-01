import styles from "./orders-list.module.css";
import OrderCard from "../order-card/order-card.jsx";

function OrdersList({ordersListData}) {
/* */
  //<OrderCard orderData={element} />

  return (
    <section className={styles.section}> 
      <ul className={styles.orders}>
      {ordersListData ? (ordersListData.map((element) => {
        return ( 
          <li className={styles.element} key={element._id}>
<OrderCard orderData={element}/>
          </li>);
        })
      ) : null}



     

      </ul>
    </section> 
  )
}

export default OrdersList;