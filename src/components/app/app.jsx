import { useState, useEffect } from 'react';
import { getIngredientsInfo } from "../../utils/api";
import { urlBase } from "../../utils/data";
import AppHeader from "../app-header/app-header.jsx"
import Main from "../main/main.jsx"
import styles from "./app.module.css";

function App() {
 
  const [data, setData] = useState([]);
  useEffect(() => {
    getIngredientsInfo(urlBase)
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
      <Main data={data}/>
    </div>
  );
  
}

export default App;