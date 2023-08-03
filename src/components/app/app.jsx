import { useState, useEffect } from 'react';
import { getIngredientsInfo } from "../../utils/api";
import AppHeader from "../app-header/app-header.jsx"
import BurgerConstructorContainer from "../burger-constructor-container/burger-constructor-container.jsx"
import styles from "./app.module.css";
import { AppContext } from "../../services/app-context.js";



function App() {
 
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

return (
  <div className={styles.app}>
    <AppHeader />
    <AppContext.Provider value={data}>
    
      <BurgerConstructorContainer/>

    </AppContext.Provider>
  </div>
);
    
}

export default App;