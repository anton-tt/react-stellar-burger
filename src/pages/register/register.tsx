import { useEffect, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Input, EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import useForm from "../../hooks/useForm";
import { HOME_PAGE, LOGIN_PAGE } from "../../utils/constants.js";
//import { TStore } from "../../services/store.js";
import { registerUser, resetRegisterUserData } from "../../services/actions/user-register";
import styles from "./register.module.css";

import rootReducer from "../../services/reducers/root-reducer.js";
function RegisterPage() {
  type TStore = ReturnType<typeof rootReducer>;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { formValues, handleChange, setFormValues } = useForm({ 
    name: "", 
    email: "", 
    password: "" 
  });

  const getRegisterUserData = (store: TStore) => store.registerUserData;
  const { registerRequest, registerFailed, registerSuccess } = useSelector(getRegisterUserData);

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(registerUser(formValues));
  };

  useEffect(() => {
    registerSuccess && navigate(HOME_PAGE, { replace: true })
  }, [registerSuccess, navigate]);

  useEffect(() => {
    return () => {
      dispatch(resetRegisterUserData());
    }
  }, []);

  if (registerRequest) {
    return <p className="text text_type_main-medium"> Загрузка... </p>
  } else if (registerFailed) {
    return <p className="text text_type_main-medium"> При обработке запроса возникла ошибка. Обновите страничку. </p> 
  } else {
      return (
      <div className={styles.box}>
        <form className={styles.form} onSubmit={submitForm}>
          <h1 className="text text_type_main-medium mb-6"> Регистрация </h1>
        
          <Input  
            type="text"
            placeholder={'Имя'} 
            name={'name'} 
            value={formValues.name} 
            onChange={handleChange}
            required
            extraClass="mb-6"
          />

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

          <Button htmlType="submit" type="primary" size="medium" extraClass="mb-20"> Зарегистрироваться </Button>

          <div className="text text_type_main-default">
            <span className="text_color_inactive"> Уже зарегистрированы? </span>
            <Link className={styles.link} to={LOGIN_PAGE}> Войти </Link>
          </div>

        </form>  
      </div>  
    )
  }

}

export default RegisterPage;