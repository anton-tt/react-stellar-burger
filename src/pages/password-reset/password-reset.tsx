import { useEffect, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { PasswordInput, Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import useForm from "../../hooks/useForm";
import { LOGIN_PAGE, FORGOT_MESSAGE_SUCCESS } from "../../utils/constants.js";
//import { TStore } from "../../services/store.js";
import { resetPassword, resetPasswordResetData } from "../../services/actions/password-reset.js";
import styles from "./password-reset.module.css";

import rootReducer from "../../services/reducers/root-reducer.js";
function PasswordResetPage() {
  type TStore = ReturnType<typeof rootReducer>;
    
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { formValues, handleChange, setFormValues } = useForm({ 
    password:"", 
    token:"" 
  });

  const getResetPasswordData = (store: TStore) => store.resetPasswordData;
  const { resetRequest, resetFailed, successReset } = useSelector(getResetPasswordData);
  const getForgotPasswordData = (store: TStore) => store.forgotPasswordData;
  const { messageForgot } = useSelector(getForgotPasswordData);

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(resetPassword(formValues));
  };

  useEffect(() => {
    (messageForgot !== FORGOT_MESSAGE_SUCCESS) && navigate(LOGIN_PAGE, { replace: true })
  }, [navigate]);

  useEffect(() => {
    return successReset && navigate(LOGIN_PAGE, { replace: false })
  }, [successReset, navigate]);

  useEffect(() => {
    return () => {
      dispatch(resetPasswordResetData());
    }
  }, []);

  if (resetRequest) {
    return <p className="text text_type_main-medium"> Загрузка... </p>
  } else if (resetFailed) {
    return <p className="text text_type_main-medium"> При обработке запроса возникла ошибка. Обновите страничку. </p>
  } else {
    return (
      <div className={styles.box}>
        <form className={styles.form} onSubmit={submitForm}>
          <h1 className="text text_type_main-medium mb-6"> Восстановление пароля </h1>

          <PasswordInput
            placeholder={'Введите новый пароль'}
            name={'password'}
            value={formValues.password}
            onChange={handleChange}
            required
            icon="ShowIcon"
            extraClass="mb-6"
          />

          <Input
            type="text"
            placeholder={'Введите код из письма'}
            name={'token'}
            value={formValues.token}
            onChange={handleChange}
            required
            extraClass="mb-6"
          />

          <Button htmlType="submit"  type="primary" size="medium" extraClass="mb-20"> Сохранить </Button>

          <div className="text text_type_main-default pb-4">
            <span className="text_color_inactive"> Вспомнили пароль? </span>
            <Link className={styles.link} to={LOGIN_PAGE}> Войти </Link>
          </div>

        </form>  
      </div>  
    )
  } 

}

export default PasswordResetPage;