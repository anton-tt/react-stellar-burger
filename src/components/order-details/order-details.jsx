import checkmark from "../../images/checkmark.png";
import styles from "./order-details.module.css";

function OrderDetails() {
    
  return (
    <section className={styles.box}>
      <h2  className={`text text_type_digits-large pb-8 ${styles.number}`}>034536</h2>
      <p className="text text_type_main-medium">идентификатор заказа</p>
      <img className={`pt-15 pb-15 ${styles.checkmark}`} src= {checkmark} alt="Значок Белая галочка"/>
      <p className="text text_type_main-default pb-2">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
    </section>  
  );

} 
      
export default OrderDetails;