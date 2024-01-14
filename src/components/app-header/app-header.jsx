import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useLocation, NavLink } from 'react-router-dom';
import { HOME_PAGE, ORDER_FEED_PAGE, PROFILE_PAGE } from "../../utils/constants.js";
import styles from "./app-header.module.css"
//import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
function AppHeader() {

  const location = useLocation();

  const pathBeginning = "/" + location.pathname.split('/')[1];
  //const pathBeginning = location.pathname;
  const baseClassLink = "text text_type_main-default"; 
  const getBurgerIconType = (path) => (path === pathBeginning) ? "primary" : "secondary";
  const getLinkTextClass = (path) => (path === pathBeginning) ? baseClassLink : `${baseClassLink} text_color_inactive`;
  

  useEffect(() => {
    return () => {
      console.log("*****************************");
  console.log(location);
    }
  }, []);



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