import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./tabs.module.css";
import PropTypes from "prop-types";

function Tabs({state}) {

  return (
    <nav className={styles.tabs}>
      <Tab value="buns" active={state === "buns"} onClick={undefined}>
        Булки
      </Tab>
      <Tab value="sauces" active={state === "sauces"} onClick={undefined}>
        Соусы
      </Tab>
      <Tab value="mains" active={state === "mains"} onClick={undefined}>
        Начинки
      </Tab>
    </nav>
  )

}

Tabs.propTypes = { 
  state: PropTypes.string.isRequired   
}

export default Tabs;