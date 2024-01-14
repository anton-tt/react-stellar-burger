import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Input, EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { HOME_PAGE, LOGIN_PAGE } from "../../utils/constants.js";
import { registerUser, registerLoginUserData } from "../../services/actions/user-register.js";
import styles from "./register.module.css";

function RegisterPage() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({ name: "", email: "", password: "" });

  const getRegisterUserData = (store) => store.registerUserData;
  const { registerRequest, registerFailed, successRegister } = useSelector(getRegisterUserData);

  const onChange = (event) => {
    setFormValues({...formValues, [event.target.name]: event.target.value})
  };

  const submitForm = (event) => {
    event.preventDefault();
    dispatch(registerUser(formValues));
  };

  useEffect(() => {
    return successRegister && navigate(HOME_PAGE, { replace: true })
  }, [successRegister, navigate]);

  useEffect(() => {
    return () => {
      dispatch(registerLoginUserData());
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
            type={'text'} 
            placeholder={'Имя'} 
            name={'name'} 
            value={formValues.name} 
            onChange={onChange}
            required
            extraClass="mb-6"
          />

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