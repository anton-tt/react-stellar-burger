import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./tabs.module.css";

function Tabs(props) {

  return (
    <nav className={styles.tabs}>
      <Tab value="buns" active={props.state === 'buns'} onClick={undefined}>
        Булки
      </Tab>
      <Tab value="sauces" active={props.state === 'sauces'} onClick={undefined}>
        Соусы
      </Tab>
      <Tab value="mains" active={props.state === 'mains'} onClick={undefined}>
        Начинки
      </Tab>
    </nav>
  )

}

export default Tabs;