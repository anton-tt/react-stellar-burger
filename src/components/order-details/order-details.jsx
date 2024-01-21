import { useSelector } from 'react-redux';
import checkmark from "../../images/checkmark.png";
import styles from "./order-details.module.css";

function OrderDetails() {
    // Вытаскиваем селектором нужные данные из хранилища
  const getOrderNumber = (store) => store.orderNumber;  
  const { orderNumber, numberRequest, numberFailed } = useSelector(getOrderNumber);
    
    // Используем условный рендеринг для разных состояний хранилища
  if (numberFailed) {
    return <p className="text text_type_main-medium">Произошла ошибка при получении данных</p>
  } else if (numberRequest) {
    return <p className="pt-30 text text_type_main-medium">Загрузка...</p>
  } else {
    return (
      <section className={`pt-30 ${styles.box}`}>
        <h2  className={`text text_type_digits-large pb-8 ${styles.number}`}> {orderNumber} </h2>
        <p className="text text_type_main-medium">идентификатор заказа</p>
        <img className={`pt-15 pb-15 ${styles.checkmark}`} src= {checkmark} alt="Значок Белая галочка"/>
        <p className="text text_type_main-default pb-2">Ваш заказ начали готовить</p>
        <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
      </section>  
    );
  }

} 

export default OrderDetails;