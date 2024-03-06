import { useEffect, FormEvent } from "react";
import { useSelector, useDispatch } from "../../hooks/hooks";
import { Input, EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { getCurrentUserData, getUpdateUserData } from "../../services/selectors";
import useForm from "../../hooks/useForm";
import { updateUser } from "../../services/actions/user-update";
import { getUser } from "../../services/actions/user-get";
import styles from "./profile-form.module.css";

function ProfileForm() {

  const dispatch = useDispatch();

  const { formValues, handleChange, setFormValues } = useForm({
    name: "", 
    email: "", 
    password: "" 
  });

  const { getUserRequest, getUserFailed, getUserSuccess, getUserData } = useSelector(getCurrentUserData);

  const { updateUserRequest, updateUserFailed, updateUserSuccess, updateUserData } = useSelector(getUpdateUserData);

  const currentUserName = getUserData? getUserData.name : "";
  const currentUserEmail = getUserData? getUserData.email : "";

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(updateUser(formValues));
  };

  const cancelUpdate = () => {
    setFormValues({
      ...formValues, 
      name: currentUserName,
      email: currentUserEmail,
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
    updateUserSuccess && dispatch(getUser()) && setFormValues({
      ...formValues, 
      name: currentUserName,
      email: currentUserEmail,
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
            type="text"
            placeholder={'Имя'} 
            name={'name'} 
            value={formValues.name} 
            icon="EditIcon"
            extraClass="mb-6"
            onChange={handleChange}
          />

          <EmailInput
            placeholder={'Логин'}
            name={'email'}
            value={formValues.email}
            isIcon={true}
            extraClass="mb-6"
            onChange={handleChange}
          />

          <PasswordInput
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