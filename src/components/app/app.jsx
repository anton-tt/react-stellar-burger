import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import PublicRoute from "../../components/public-route/public-route.jsx";
import ProtectedRoute from "../../components/protected-route/protected-route.jsx";  

import AppHeader from "../app-header/app-header.jsx";
import BurgerConstructorContainer from "../burger-constructor-container/burger-constructor-container.jsx";
import ModalBase from "../modal-base/modal-base.jsx";
import RegisterPage from "../../pages/register/register.jsx";
import LoginPage from "../../pages/login/login.jsx";
import PasswordForgotPage from "../../pages/password-forgot/password-forgot.jsx";
import PasswordResetPage from "../../pages/password-reset/password-reset.jsx";
import ProfilePage from "../../pages/profile/profile.jsx";
import OrderFeedPage from "../../pages/order-feed/order-feed.jsx";
import NotFoundPage from "../../pages/not-found/not-found.jsx";

import { HOME_PAGE, REGISTER_PAGE, LOGIN_PAGE, PASSWORD_FORGOT_PAGE, PASSWORD_RESET_PAGE, PROFILE_PAGE, ORDER_FEED_PAGE, 
  ORDER_HISTORY_PAGE, INGREDIENT_PAGE, NOT_FOUND_PAGE } from "../../utils/constants.js";
import IngredientDetails from "../ingredient-details/ingredient-details.jsx";
import styles from "./app.module.css";

function App() {

  const navigate = useNavigate();

  const location = useLocation();
  const background = location.state && location.state.background;

  const getCurrentUserData = (store) => store.getUserData;
  const { successGetUser, getUserData } = useSelector(getCurrentUserData);

  const closeModal = () => {
    navigate(-1);
  };

  return (
    <div className={styles.app}>
      <AppHeader />

      <Routes location={background || location}>
        <Route path={HOME_PAGE} element={ <BurgerConstructorContainer /> } />
        
        <Route path={REGISTER_PAGE} element={ <PublicRoute element={ <RegisterPage /> } />} />
        
        <Route path={LOGIN_PAGE} element={ <PublicRoute element={ <LoginPage /> } />} />
    
        <Route path={PASSWORD_FORGOT_PAGE} element={ <PublicRoute element={ <PasswordForgotPage /> } />} />
        
        <Route path={PASSWORD_RESET_PAGE} element={ <PublicRoute element={ <PasswordResetPage /> } />} />

        <Route path={PROFILE_PAGE} element={ <ProtectedRoute element={ <ProfilePage /> } />} />

        <Route path={ORDER_HISTORY_PAGE} element={ <ProtectedRoute element={ <ProfilePage /> } />} />

        <Route path={ORDER_FEED_PAGE} element={ <OrderFeedPage /> } />

        <Route path={INGREDIENT_PAGE} element={ <IngredientDetails /> } />
        
        <Route path={NOT_FOUND_PAGE} element={<NotFoundPage />} />  
      </Routes>    

      { background && (
        <Routes>
          <Route path={INGREDIENT_PAGE} element={ 
            <ModalBase closeModal={closeModal} >
              <IngredientDetails /> 
            </ModalBase>}
          />
        </Routes>
        )
      }
    </div>
  );
    
}

export default App;