import { useState } from "react";
import { Link } from "react-router-dom";
import { Input, EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components"
import { LOGIN_PAGE } from "../../utils/constants.js";
import styles from "./profile-form.module.css";

function ProfileForm() {
  
  const [formValues, setFormValues] = useState({ name:"", email:"", password:"" });
  
  const onChange = (event) => (
    setFormValues({...formValues, [event.target.name]: event.target.value})
  )

  return (
    <>
      <form className={styles.form}>
        
        <Input 
          type={'text'} 
          placeholder={'Имя'} 
          name={'name'} 
          value={formValues.name} 
          onChange={onChange}
          
          extraClass="mb-6"
          icon="EditIcon"
        />

        <EmailInput
          type={'email'}
          placeholder={'Логин'}
          name={'email'}
          value={formValues.email}
          onChange={onChange}
          icon="EditIcon"
          extraClass="mb-6"
        />

        <Input
          type={'password'}
          placeholder={'Пароль'}
          name={'password'}
          value={formValues.password}
          onChange={onChange}
          icon="EditIcon"
          extraClass="mb-6"
        />

      </form>  
    </>  
  )

}

export default ProfileForm;