import { useEffect, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "../../hooks/hooks";
import { EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import useForm from "../../hooks/useForm";
import { PASSWORD_RESET_PAGE, LOGIN_PAGE } from "../../utils/constants";
import { getForgotPasswordData } from "../../services/selectors";
import { forgotPassword, resetForgotPasswordData } from "../../services/actions/password-forgot";
import styles from "./password-forgot.module.css";

function PasswordForgotPage() {
  
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { formValues, handleChange, setFormValues } = useForm({
    email: ""
  });

  const { forgotRequest, forgotFailed, forgotSuccess } = useSelector(getForgotPasswordData);
  
  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(forgotPassword(formValues));
  };

  useEffect(() => {
    forgotSuccess && navigate(PASSWORD_RESET_PAGE, { replace: false })
  }, [forgotSuccess, navigate]);

  useEffect(() => {
    return () => {
      dispatch(resetForgotPasswordData());
    }
  }, []);

  if (forgotRequest) {
    return <p className="text text_type_main-medium"> Загрузка... </p>
  } else if (forgotFailed) {
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

          <Button htmlType="submit" type="primary" size="medium" extraClass="mb-20"> Восстановить </Button>

          <div className="text text_type_main-default pb-4">
            <span className="text_color_inactive"> Вспомнили пароль? </span>
            <Link className={styles.link} to={LOGIN_PAGE}> Войти </Link>
          </div>

        </form>  
      </div>  
    )
  }

}

export default PasswordForgotPage;