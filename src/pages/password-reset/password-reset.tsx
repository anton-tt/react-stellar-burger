import { useEffect, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "../../hooks/hooks";
import { PasswordInput, Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import useForm from "../../hooks/useForm";
import { LOGIN_PAGE, FORGOT_MESSAGE_SUCCESS } from "../../utils/constants";
import { getResetPasswordData, getForgotPasswordData } from "../../services/selectors";
import { resetPassword, resetPasswordResetData } from "../../services/actions/password-reset";
import styles from "./password-reset.module.css";

function PasswordResetPage() {
    
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { formValues, handleChange, setFormValues } = useForm({ 
    password:"", 
    token:"" 
  });

  const { resetRequest, resetFailed, resetSuccess } = useSelector(getResetPasswordData);

  const { forgotMessage } = useSelector(getForgotPasswordData);

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(resetPassword(formValues));
  };

  useEffect(() => {
    (forgotMessage !== FORGOT_MESSAGE_SUCCESS) && navigate(LOGIN_PAGE, { replace: true })
  }, [navigate]);

  useEffect(() => {
    resetSuccess && navigate(LOGIN_PAGE, { replace: false })
  }, [resetSuccess, navigate]);

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