import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import styles from "./app-header.module.css"

function AppHeader() {

  return (  
    <header>
      <nav className={`pt-4 pb-4 ${styles.content}`}>
        
        <ul className={styles.list}>
          <li>
            <a href="#" className={`pt-4 pr-5 pb-4 pl-5 ${styles.button}`}>
              <BurgerIcon type="primary" />
              <p className="text text_type_main-default"> Конструктор </p>
            </a>
          </li>
          <li>
            <a href="#" className={`pt-4 pr-5 pb-4 pl-5 ${styles.button}`}>
              <ListIcon type="secondary" />
              <p className="text text_type_main-default text_color_inactive"> Лента заказов </p>
            </a>   
          </li>
        </ul>
        
        <div className={styles.logo}>
          <Logo/>
        </div>
        
        <ul className={styles.list}>
          <li>
            <a href="#" className={`pt-4 pr-5 pb-4 pl-5 ${styles.button}`}>
              <ProfileIcon type="secondary" />
              <p className="text text_type_main-default text_color_inactive"> Личный кабинет </p>
            </a>  
          </li>
        </ul>
      </nav>
    </header>  
  );

}
  
export default AppHeader;