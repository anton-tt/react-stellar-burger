import { useContext } from 'react';
import checkmark from "../../images/checkmark.png";
import styles from "./order-details.module.css";
import { OrderContext } from "../../services/app-context.js";
import PropTypes from "prop-types";

function OrderDetails() {
  
  const orderNumber = useContext(OrderContext);

  return (
    <section className={styles.box}>
      <h2  className={`text text_type_digits-large pb-8 ${styles.number}`}> {orderNumber} </h2>
      <p className="text text_type_main-medium">идентификатор заказа</p>
      <img className={`pt-15 pb-15 ${styles.checkmark}`} src= {checkmark} alt="Значок Белая галочка"/>
      <p className="text text_type_main-default pb-2">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
    </section>  
  );

} 

OrderDetails.propTypes = { 
  orderNumber: PropTypes.number.isRequired 
}  

export default OrderDetails;