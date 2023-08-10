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