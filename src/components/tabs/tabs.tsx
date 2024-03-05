import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./tabs.module.css";

type TTabsProps = {
  state: string;
  tabClick: (tab: string) => void; 
};

function Tabs({state, tabClick}: TTabsProps) {

  return (
    <nav className={styles.tabs}>
      <Tab value="buns" active={state === "buns"} onClick={() => tabClick("buns")}>
        Булки
      </Tab>
      <Tab value="sauces" active={state === "sauces"} onClick={() => tabClick("sauces")}>
        Соусы
      </Tab>
      <Tab value="mains" active={state === "mains"} onClick={() => tabClick("mains")}>
        Начинки
      </Tab>
    </nav>
  )

}

export default Tabs;