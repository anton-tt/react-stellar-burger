import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import useForm from "../../hooks/useForm";
import { updateUser } from "../../services/actions/user-update.js";
import { getUser } from "../../services/actions/user-get.js";
import styles from "./profile-form.module.css";

function ProfileForm() {

  const dispatch = useDispatch();

  const { formValues, handleChange, setFormValues } = useForm({
    name: "", 
    email: "", 
    password: "" 
  });

  const getCurrentUserData = (store) => store.getUserData;
  const { getUserRequest, getUserFailed, successGetUser, getUserData } = useSelector(getCurrentUserData);

  const getUpdateUserData = (store) => store.updateUserData;
  const { updateUserRequest, updateUserFailed, successUpdateUser, updateUserData } = useSelector(getUpdateUserData);

  const submitForm = (event) => {
    event.preventDefault();
    dispatch(updateUser(formValues));
  };

  const cancelUpdate = () => {
    setFormValues({
      ...formValues, 
      name: getUserData.name,
      email: getUserData.email,
      password: ""
    });
  };
  
  useEffect(() => {
    getUserData && setFormValues({
      ...formValues, 
      name: getUserData.name,
      email: getUserData.email,
      password: ""
    });
  }, [getUserData]);

  useEffect(() => {
    successUpdateUser && dispatch(getUser()) && setFormValues({
      ...formValues, 
      name: getUserData.name,
      email: getUserData.email,
      password: ""
    });
  }, [updateUserData]);

  const isChangedInput = (getUserData) && 
    ((formValues.name !== getUserData.name) || 
    (formValues.email !== getUserData.email) ||
    (formValues.password !== ""));
  const isHiddenButton = !isChangedInput ? true : false;  
  
  if (getUserRequest || updateUserRequest) {
    return <p className="text text_type_main-medium"> Загрузка... </p>
  } else if (getUserFailed || updateUserFailed) {
    return <p className="text text_type_main-medium"> При обработке запроса возникла ошибка. Обновите страничку. </p>
  } else {

    return (
      <>
        <form className={styles.form} onSubmit={submitForm} onReset={cancelUpdate}>
        
          <Input 
            type={'text'} 
            placeholder={'Имя'} 
            name={'name'} 
            value={formValues.name} 
            extraClass="mb-6"
            icon="EditIcon"
            onChange={handleChange}
          />

          <EmailInput
            type={'email'}
            placeholder={'Логин'}
            name={'email'}
            value={formValues.email}
            icon="EditIcon"
            extraClass="mb-6"
            onChange={handleChange}
          />

          <PasswordInput
            type={'password'}
            placeholder={'Пароль'}
            name={'password'}
            value={formValues.password}
            icon="EditIcon"
            extraClass="mb-6"
            onChange={handleChange}
          />

          <div>
            <Button 
              htmlType="submit" 
              type="primary" 
              size="medium"
              hidden={isHiddenButton} 
            >
              Сохранить 
            </Button>
            <Button 
              htmlType="reset" 
              type="secondary" 
              size="medium" 
              hidden={isHiddenButton}
            > 
              Отменить 
            </Button>
          </div>

        </form>  
      </>  
   )
  }

}

export default ProfileForm;