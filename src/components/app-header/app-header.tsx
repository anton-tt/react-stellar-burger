import { useLocation, NavLink } from "react-router-dom";
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { HOME_PAGE, ORDER_FEED_PAGE, PROFILE_PAGE } from "../../utils/constants";
import styles from "./app-header.module.css"

function AppHeader() {

  const location = useLocation();

  const pathBeginning = "/" + location.pathname.split('/')[1];
  const baseClassLink = "text text_type_main-default"; 
  const getBurgerIconType = (path: string) => (path === pathBeginning) ? "primary" : "secondary";
  const getLinkTextClass = (path: string) => (path === pathBeginning) ? baseClassLink : `${baseClassLink} text_color_inactive`;
  
  return (  
    <header>
      <nav className={`pt-4 pb-4 ${styles.content}`}>
        
        <ul className={styles.list}>
          <li>
            <NavLink to={HOME_PAGE} className={`pt-4 pr-5 pb-4 pl-5 ${styles.button}`} state={{ from: location }}>
              <BurgerIcon type={getBurgerIconType(HOME_PAGE)} />
              <p className={getLinkTextClass(HOME_PAGE)}> Конструктор </p>
            </NavLink>
          </li>
          <li>
            <NavLink to={ORDER_FEED_PAGE} className={`pt-4 pr-5 pb-4 pl-5 ${styles.button}`} state={{ from: location }}>
              <ListIcon type={getBurgerIconType(ORDER_FEED_PAGE)} />
              <p className={getLinkTextClass(ORDER_FEED_PAGE)}> Лента заказов </p>
            </NavLink>   
          </li>
        </ul>
        
        <div className={styles.logo}>
          <Logo/>
        </div>
        
        <ul className={styles.list}>
          <li>
            <NavLink to={PROFILE_PAGE} className={`pt-4 pr-5 pb-4 pl-5 ${styles.button}`} state={{ from: location }}>
              <ProfileIcon type={getBurgerIconType(PROFILE_PAGE)} />
              <p className={getLinkTextClass(PROFILE_PAGE)}> Личный кабинет </p>
            </NavLink>  
          </li>
        </ul>
      </nav>
    </header>  
  );

}
  
export default AppHeader;