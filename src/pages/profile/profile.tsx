import { useEffect, SyntheticEvent } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LOGIN_PAGE, PROFILE_PAGE, ORDER_HISTORY_PAGE } from "../../utils/constants.js";
import ProfileForm from "../../components/profile-form/profile-form";
import OrderHistoryPage from "../order-history/order-history";
//import { TStore } from "../../services/store.js";
import { logoutUser, resetLogoutUserData } from "../../services/actions/user-logout";
import { getUser, resetGetUserData } from "../../services/actions/user-get";
import { resetUpdateUserData } from "../../services/actions/user-update";
import styles from "./profile.module.css";

import rootReducer from "../../services/reducers/root-reducer.js";
function ProfilePage() {
  type TStore = ReturnType<typeof rootReducer>;
  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  
  const location = useLocation();

  const getLogoutUserData = (store: TStore) => store.logoutUserData;
  const { logoutRequest, logoutFailed, logoutSuccess } = useSelector(getLogoutUserData);

  const logout = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(logoutUser());
  };
  
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    logoutSuccess && navigate(LOGIN_PAGE, { replace: true })
  }, [logoutSuccess, navigate]);

  useEffect(() => {
    return () => {
      dispatch(resetGetUserData());
      dispatch(resetUpdateUserData());
      dispatch(resetLogoutUserData());
    }
  }, []); 
  
  const currentPath = location.pathname;  
  const baseClassLink = `text text_type_main-medium ${styles.link}`; 

  const getLinkTextClass = (path: string) => (path === currentPath) ? 
    `${baseClassLink} ${styles.activeLink}` : `${baseClassLink} ${styles.inactiveLink}`;

  if (logoutRequest) {
    return <p className="text text_type_main-medium"> Загрузка... </p>
  } else if (logoutFailed) {
    return <p className="text text_type_main-medium"> При обработке запроса возникла ошибка. Обновите страничку. </p>
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