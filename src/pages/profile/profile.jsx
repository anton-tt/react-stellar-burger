import { useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LOGIN_PAGE, PROFILE_PAGE, ORDER_HISTORY_PAGE } from "../../utils/constants.js";
import ProfileForm from "../../components/profile-form/profile-form.jsx";
import OrderHistoryPage from "../../pages/order-history/order-history.jsx";
import { logoutUser, resetLogoutUserData } from "../../services/actions/user-logout.js";
import { getUser, resetGetUserData } from "../../services/actions/user-get.js";
import styles from "./profile.module.css";
import { resetUpdateUserData } from "../../services/actions/user-update.js";
function ProfilePage() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const getLogoutUserData = (store) => store.logoutUserData;
  const { logoutRequest, logoutFailed, successLogout } = useSelector(getLogoutUserData);

  const logout = (event) => {
    event.preventDefault();
    dispatch(logoutUser());
  };
  
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(resetGetUserData());
      dispatch(resetUpdateUserData());
      dispatch(resetLogoutUserData());
    }
  }, []);

  

  

  

  useEffect(() => {
    console.log("!!!" + successLogout);
    return successLogout ? navigate(LOGIN_PAGE, { replace: true }) : null
  }, [successLogout, navigate]);
  
  const currentPath = location.pathname;  
  const baseClassLink = `text text_type_main-medium ${styles.link}`; 
//const classLink = ({isActive}) => isActive ? `${baseClassLink} ${styles.activeLink}` : `${baseClassLink} ${styles.inactiveLink}`;

const getLinkTextClass = (path) => (path === currentPath) ? `${baseClassLink} ${styles.activeLink}` : `${baseClassLink} ${styles.inactiveLink}`;

/*useEffect(() => {    // !!!!!!!!!!!!!!!!!!!!!
  console.log("7777777");
  return successLogout ? dispatch(getUser()) : null
}, [successLogout, dispatch]);*/


  if (logoutFailed) {
    return <p className="text text_type_main-medium"> При обработке запроса возникла ошибка. Обновите страничку. </p>
  } else if (logoutRequest) {
    return <p className="text text_type_main-medium"> Загрузка... </p>
  } else {

  return (
    <div className={styles.box}>
      <nav className={styles.menu}>
        <NavLink to={PROFILE_PAGE} className={getLinkTextClass(PROFILE_PAGE)} >
          Профиль
        </NavLink>

        <NavLink to={ORDER_HISTORY_PAGE} className={getLinkTextClass(ORDER_HISTORY_PAGE)} >
          История заказов
        </NavLink>

        <NavLink to={LOGIN_PAGE} className={`${baseClassLink} ${styles.inactiveLink}`} onClick={logout}>
          Выход
        </NavLink>

        <p className={`text text_type_main-default text_color_inactive pt-20`}>
          В этом разделе вы можете изменить свои персональные данные 
        </p>

      </nav>

      { (currentPath === ORDER_HISTORY_PAGE) ? <OrderHistoryPage /> : <ProfileForm /> }

    </div>  
  )

}}

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
