import AppHeader from "../app-header/app-header.jsx"
import BurgerConstructorContainer from "../burger-constructor-container/burger-constructor-container.jsx"
import styles from "./app.module.css";

function App() {

  return (
    <div className={styles.app}>
      <AppHeader />   
      <BurgerConstructorContainer/>
    </div>
  );
    
}

export default App;

/*
import { useState, useEffect } from 'react';
import { getIngredientsInfo } from "../../utils/api";
import { AppContext } from "../../services/app-context.js";

const [data, setData] = useState([]);
  useEffect(() => {
    getIngredientsInfo()
    .then((res) => { 
      setData(res.data);
    })
    .catch((err) => {
      console.log(err);
    }); 
}, []);

/<AppContext.Provider value={data}>
    
      <BurgerConstructorContainer/>

    </AppContext.Provider>
*/