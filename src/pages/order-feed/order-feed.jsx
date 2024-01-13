import { useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";
//import { EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
//import { REGISTER_PAGE, PASSWORD_FORGOT_PAGE } from "../../utils/constants.js";
import styles from "./order-feed.module.css";
import { Link } from "react-router-dom";
import { HOME_PAGE } from "../../utils/constants.js";

function OrderFeedPage() {
  
 /* const [formValues, setFormValues] = useState({ email:"", password:"" });
  
  const onChange = (event) => (
    setFormValues({...formValues, [event.target.name]: event.target.value})
  )*/

  
    const navigate = useNavigate();

    function goBack() {
        navigate(-1);
    }
    function goForward() {
        navigate(1);
    }

   

  return (
    <div className={styles.box}>
      <h1>Лента заказов</h1>
      <h2>На странице проводятся плановые технические работы</h2>
      <p> вы можете 
      <Link onClick={goBack}> вернуться назад </Link>
        , воспользоваться меню сайта или перейти 
        <Link to={HOME_PAGE}> на домашнюю страницу </Link>
      </p>
    </div>  
  )

}

export default OrderFeedPage;