import { Routes, Route } from 'react-router-dom';
import AppHeader from "../app-header/app-header.jsx";
import BurgerConstructorContainer from "../burger-constructor-container/burger-constructor-container.jsx";
import RegisterPage from "../../pages/register/register.jsx";
import LoginPage from "../../pages/login/login.jsx";
import PasswordForgotPage from "../../pages/password-forgot/password-forgot.jsx";
import PasswordResetPage from "../../pages/password-reset/password-reset.jsx";
import ProfilePage from "../../pages/profile/profile.jsx";
import NotFoundPage from "../../pages/not-found/not-found.jsx";
import { HOME_PAGE, REGISTER_PAGE, LOGIN_PAGE, PASSWORD_FORGOT_PAGE, PASSWORD_RESET_PAGE, PROFILE_PAGE, 
  NOT_FOUND_PAGE } from "../../utils/constants.js";
import styles from "./app.module.css";

function App() {

  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes>
        <Route path={HOME_PAGE} element={<BurgerConstructorContainer />} />
        <Route path={REGISTER_PAGE} element={<RegisterPage />} />
        <Route path={LOGIN_PAGE} element={<LoginPage />} />
        <Route path={PASSWORD_FORGOT_PAGE} element={<PasswordForgotPage />} /> 
        <Route path={PASSWORD_RESET_PAGE} element={<PasswordResetPage />} /> 
        <Route path={PROFILE_PAGE} element={<ProfilePage />} />  
        <Route path={NOT_FOUND_PAGE} element={<NotFoundPage />} />
      </Routes>     
    </div>
  );
    
}

export default App;