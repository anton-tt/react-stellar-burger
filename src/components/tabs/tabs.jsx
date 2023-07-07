import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from 'react';
import styles from "./tabs.module.css";

function Tabs() {
  const [state, setState] = useState('one');

  return (
    <nav className={styles.tabs}>
      <Tab value="one" active={state === 'one'} onClick={setState}>
        Булки
      </Tab>
      <Tab value="two" active={state === 'two'} onClick={setState}>
        Соусы
      </Tab>
      <Tab value="three" active={state === 'three'} onClick={setState}>
        Начинки
      </Tab>
    </nav>
  )

}

export default Tabs;