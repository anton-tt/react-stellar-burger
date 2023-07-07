import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import styles from "./app-header.module.css"

function AppHeader() {

  return (  
    <header>
      <nav className={`pt-4 pb-4 ${styles.content}`}>
        
        <ul className={styles.list}>
          <li>
          <button className={`pt-4 pr-5 pb-4 pl-5 ${styles.button}`}>
              <BurgerIcon type="primary" />
              <p className="text text_type_main-default"> Конструктор </p>
            </button>
          </li>
          <li>
            <button className={`pt-4 pr-5 pb-4 pl-5 ${styles.button}`}>
              <ListIcon type="primary" />
              <p className="text text_type_main-default text_color_inactive"> Лента заказов </p>
            </button>   
          </li>
        </ul>
        
        <div className={styles.logo}>
          <Logo/>
        </div>
        
        <ul className={styles.list}>
          <li>
            <button className={`pt-4 pr-5 pb-4 pl-5 ${styles.button}`}>
              <ProfileIcon type="primary" />
              <p className="text text_type_main-default text_color_inactive"> Личный кабинет </p>
            </button>  
          </li>
        </ul>
      </nav>
    </header>  
  );

}
  
export default AppHeader;