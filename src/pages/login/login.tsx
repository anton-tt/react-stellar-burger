import { useEffect, FormEvent } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import useForm from "../../hooks/useForm";
import { REGISTER_PAGE, PASSWORD_FORGOT_PAGE } from "../../utils/constants";
import { TStore } from "../../services/store";
import { loginUser, resetLoginUserData } from "../../services/actions/user-login";
import { getUser } from "../../services/actions/user-get";
import styles from "./login.module.css";

function LoginPage() {

  const dispatch = useDispatch();
  
  const getLoginUserData = (store: TStore) => store.loginUserData;
  const { loginRequest, loginFailed, loginSuccess } = useSelector(getLoginUserData);

  const { formValues, handleChange, setFormValues } = useForm({ 
    email: "", 
    password: "" 
  });

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(loginUser(formValues));
  };

  useEffect(() => {
    loginSuccess && dispatch(getUser())
  }, [loginSuccess, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(resetLoginUserData());
    }
  }, []);

  if (loginRequest) {
    return <p className="text text_type_main-medium"> Загрузка... </p>
  } else if (loginFailed) {
    return <p className="text text_type_main-medium"> При обработке запроса возникла ошибка. Обновите страничку. </p>
  } else {
    return (
      <div className={styles.box}>
        <form className={styles.form} onSubmit={submitForm}>
          <h1 className="text text_type_main-medium mb-6"> Вход </h1>

          <EmailInput
            placeholder={'E-mail'}
            name={'email'}
            value={formValues.email}
            onChange={handleChange}
            required
            extraClass="mb-6"
          />

          <PasswordInput
            placeholder={'Пароль'}
            name={'password'}
            value={formValues.password}
            onChange={handleChange}
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