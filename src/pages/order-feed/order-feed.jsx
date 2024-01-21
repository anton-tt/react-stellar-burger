import { Link, useNavigate } from "react-router-dom";
import { HOME_PAGE } from "../../utils/constants.js";
import styles from "./order-feed.module.css";

function OrderFeedPage() {
  
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }
   
  return (
    <div className={styles.box}>
      <div className="pt-20 pb-10">
        <h2 className="text text_type_main-large"> Лента заказов </h2>
        <h3 className="text text_type_main-medium">На странице проводятся плановые технические работы</h3>
      </div>
      <div> 
        <p className="text text_type_main-default text_color_inactive"> 
          Вы можете 
          <Link className={styles.link} onClick={goBack}> вернуться назад</Link>
          , воспользоваться меню сайта или перейти 
          <Link className={styles.link} to={HOME_PAGE}> на домашнюю страницу </Link>
        </p>
      </div> 
    </div>   
  )

}

export default OrderFeedPage;