import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { HOME_PAGE, REGISTER_PAGE, PASSWORD_FORGOT_PAGE } from "../../utils/constants.js";
import { loginUser } from "../../services/actions/user-login.js";
import styles from "./login.module.css";

function LoginPage() {
  
  const [formValues, setFormValues] = useState({ email:"", password:"" });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const getLoginUserData = (store) => store.loginUserData;
  const { loginRequest, loginFailed, successLogin } = useSelector(getLoginUserData);
  
  const onChange = (event) => {
    setFormValues({...formValues, [event.target.name]: event.target.value})
  };

  const submitForm = (event) => {
    event.preventDefault();
    dispatch(loginUser(formValues));
  };

  useEffect(() => {
    return successLogin ? navigate(HOME_PAGE, { replace: true }) : null
  }, [successLogin, navigate]);

  if (loginFailed) {
    return <p className="text text_type_main-medium"> При обработке запроса возникла ошибка. Обновите страничку. </p>
  } else if (loginRequest) {
    return <p className="text text_type_main-medium"> Загрузка... </p>
  } else {
    return (
      <div className={styles.box}>
        <form className={styles.form} onSubmit={submitForm}>
          <h1 className="text text_type_main-medium mb-6"> Вход </h1>

          <EmailInput
            type={'email'}
            placeholder={'E-mail'}
            name={'email'}
            value={formValues.email}
            onChange={onChange}
            required
            extraClass="mb-6"
          />

          <PasswordInput
            type={'password'}
            placeholder={'Пароль'}
            name={'password'}
            value={formValues.password}
            onChange={onChange}
            required
            icon="ShowIcon"
            extraClass="mb-6"
          />

          <Button htmlType="submit" type="primary" size="medium" extraClass="mb-20"> Войти </Button>

          <div className="text text_type_main-default pb-4">
            <span className="text_color_inactive"> Вы - новый пользователь? </span>
            <Link className={styles.link} to={REGISTER_PAGE} > Зарегистрироваться </Link>
          </div>
          <div className="text text_type_main-default">  
            <span className="text_color_inactive"> Забыли пароль? </span>
            <Link className={styles.link} to={PASSWORD_FORGOT_PAGE} > Восстановить пароль </Link>
          </div>

        </form>  
      </div>  
    )
  }

}

export default LoginPage;