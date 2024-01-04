//import { useState } from "react";
import { NavLink } from "react-router-dom";
//import { /*EmailInput,*/ PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { PROFILE_PAGE } from "../../utils/constants.js";
import ProfileForm from "../../components/profile-form/profile-form.jsx";
import styles from "./profile.module.css";

function ProfilePage() {
  
 /* const [formValues, setFormValues] = useState({ email:"", password:"" });
  
  const onChange = (event) => (
    setFormValues({...formValues, [event.target.name]: event.target.value})
  )*/

  return (
    <div className={styles.box}>
      <nav className={styles.menu}>
        <NavLink to={PROFILE_PAGE} className={`text text_type_main-medium ${styles.link}`}>
          Профиль
        </NavLink>

        <NavLink className={`text text_type_main-medium ${styles.link}`}>
          История заказов
        </NavLink>

        <NavLink className={`text text_type_main-medium ${styles.link}`}>
          Выход
        </NavLink>

        <p className={`text text_type_main-default text_color_inactive pt-20`}>
          В этом разделе вы можете изменить свои персональные данные 
        </p>

      </nav>

      <ProfileForm />

    </div>  
  )

}

export default ProfilePage;

/*
  
  <EmailInput
          type={'email'}
          placeholder={'E-mail'}
          name={'email'}
          value={formValues.email}
          onChange={onChange}
          required
          extraClass="mb-6"
        />
<form className={styles.form}>
        <h1 className="text text_type_main-medium mb-6"> Вход </h1>

        

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

        <Button htmlType="button" type="primary" size="medium" extraClass="mb-20"> Войти </Button>

        <div className="text text_type_main-default pb-4">
          <span className="text_color_inactive"> Вы - новый пользователь? </span>
          <Link className={styles.link} to={REGISTER_PAGE} > Зарегистрироваться </Link>
        </div>
        <div className="text text_type_main-default">  
          <span className="text_color_inactive"> Забыли пароль? </span>
          <Link className={styles.link} to={PASSWORD_FORGOT_PAGE} > Восстановить пароль </Link>
        </div>

      </form>  
  */
