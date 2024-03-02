import { useSelector } from 'react-redux';
//import { TStore } from "../../services/store.js";
import checkmark from "../../images/checkmark.png";
import styles from "./order-details.module.css";

import rootReducer from "../../services/reducers/root-reducer.js";
function OrderDetails() {
  type TStore = ReturnType<typeof rootReducer>;
    // Вытаскиваем селектором нужные данные из хранилища
  const getOrderNumber = (store: TStore) => store.orderNumber;  
  const { orderNumber, orderRequest, orderFailed } = useSelector(getOrderNumber);
    
    // Используем условный рендеринг для разных состояний хранилища
  if (orderFailed) {
    return <p className="text text_type_main-medium">Произошла ошибка при получении данных</p>
  } else if (orderRequest) {
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