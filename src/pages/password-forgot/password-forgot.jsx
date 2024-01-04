import { useState } from "react";
import { Link } from "react-router-dom";
import { EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { LOGIN_PAGE } from "../../utils/constants.js";
import styles from "./password-forgot.module.css";

function PasswordForgotPage() {
  
  const [formValues, setFormValues] = useState({ email:"", password:"" });
  
  const onChange = (event) => (
    setFormValues({...formValues, [event.target.name]: event.target.value})
  )

  return (
    <div className={styles.box}>
      <form className={styles.form}>
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

        <Button htmlType="button" type="primary" size="medium" extraClass="mb-20"> Укажите e-mail </Button>

        <div className="text text_type_main-default pb-4">
          <span className="text_color_inactive"> Вспомнили пароль? </span>
          <Link className={styles.link} to={LOGIN_PAGE}> Войти </Link>
        </div>

      </form>  
    </div>  
  )

}

export default PasswordForgotPage;