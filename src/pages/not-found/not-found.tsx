import { Link, useNavigate } from "react-router-dom";
import { HOME_PAGE, NOT_FOUND_PAGE } from "../../utils/constants";
import styles from "./not-found.module.css";

function NotFoundPage() {

  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }
  
  return (
      <div className={styles.box}>
      <div className={"pt-20 pb-20"}>
        <h1 className="text text_type_digits-large"> 404 </h1>
        <h2 className="text text_type_main-large">cтраница не найдена</h2>
      </div>
      <div> 
        <p className="text text_type_main-default text_color_inactive">
          Cтраница, которую вы хотели просмотреть, недоступна либо удалена, возможно введён неправильный адрес. 
        </p>
        <p className="text text_type_main-default text_color_inactive"> 
          Вы можете 
          <Link className={styles.link} onClick={goBack} to={NOT_FOUND_PAGE}> вернуться назад</Link>
          , воспользоваться меню сайта или перейти 
          <Link className={styles.link} to={HOME_PAGE}> на домашнюю страницу </Link>
        </p>
      </div> 
    </div>  
  )

}

export default NotFoundPage;