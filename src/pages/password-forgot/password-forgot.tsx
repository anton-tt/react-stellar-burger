import { useEffect, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import useForm from "../../hooks/useForm";
import { PASSWORD_RESET_PAGE, LOGIN_PAGE } from "../../utils/constants.js";
import { forgotPassword, forgotPasswordResetData } from "../../services/actions/password-forgot.js";
import styles from "./password-forgot.module.css";
import rootReducer from "../../services/reducers/root-reducer.js";
function PasswordForgotPage() {

  type TStore = ReturnType<typeof rootReducer>;
  
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { formValues, handleChange, setFormValues } = useForm({
    email: ""
  });

  const getForgotPasswordData = (store: TStore) => store.forgotPasswordData;
  const { forgotRequest, forgotFailed, successForgot } = useSelector(getForgotPasswordData);
  
  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(forgotPassword(formValues));
  };

  useEffect(() => {
    console.log(successForgot);
    return successForgot && navigate(PASSWORD_RESET_PAGE, { replace: false })
  }, [successForgot, navigate]);

  useEffect(() => {
    return () => {
      dispatch(forgotPasswordResetData());
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