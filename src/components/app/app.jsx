import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import PublicRoute from "../../components/public-route/public-route.jsx";
import ProtectedRoute from "../../components/protected-route/protected-route.jsx";  

import AppHeader from "../app-header/app-header.jsx";
import BurgerConstructorContainer from "../burger-constructor-container/burger-constructor-container.jsx";
import ModalBase from "../modal-base/modal-base.jsx";
import RegisterPage from "../../pages/register/register.tsx";
import LoginPage from "../../pages/login/login.tsx";
import PasswordForgotPage from "../../pages/password-forgot/password-forgot.tsx";
import PasswordResetPage from "../../pages/password-reset/password-reset.tsx";
import ProfilePage from "../../pages/profile/profile.jsx";
import OrderFeedPage from "../../pages/order-feed/order-feed.jsx";
import NotFoundPage from "../../pages/not-found/not-found.jsx";

import { HOME_PAGE, REGISTER_PAGE, LOGIN_PAGE, PASSWORD_FORGOT_PAGE, PASSWORD_RESET_PAGE, PROFILE_PAGE, ORDER_FEED_PAGE, 
  ORDER_HISTORY_PAGE, ORDER_PAGE, INGREDIENT_PAGE, NOT_FOUND_PAGE } from "../../utils/constants.js";
import IngredientDetails from "../ingredient-details/ingredient-details.jsx";
import OrderStructure from "../order-structure/order-structure.jsx";
import { getIngredientsList } from "../../services/actions/burger-ingredients.js";
import styles from "./app.module.css";

function App() {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const location = useLocation();

  const background = location.state && location.state.background;

  const getCurrentUserData = (store) => store.getUserData;
  const { successGetUser, getUserData } = useSelector(getCurrentUserData);

  const getIngredientsData = (store) => store.ingredientsData;
  const { ingredientsData, ingredientsRequest, ingredientsFailed } = useSelector(getIngredientsData);

  useEffect(()=> {
    dispatch(getIngredientsList()); 
  }, []);

  const closeModal = () => {
    navigate(-1);    
  };

  return (
    <div className={styles.app}>
      <AppHeader />

      { (ingredientsRequest) && 
        (<p className="text text_type_main-medium"> Загрузка... </p>) }

      { (ingredientsFailed) &&
        (<p className="text text_type_main-medium"> При обработке запроса возникла ошибка. Обновите страничку. </p>) }

      { !ingredientsRequest && !ingredientsFailed && ingredientsData.length && 
        (<Routes location={background || location}>
          <Route index path={HOME_PAGE} element={ <BurgerConstructorContainer /> } />
        
          <Route path={REGISTER_PAGE} element={ <PublicRoute element={ <RegisterPage /> } />} />
         
          <Route path={LOGIN_PAGE} element={ <PublicRoute element={ <LoginPage /> } />} />
    
          <Route path={PASSWORD_FORGOT_PAGE} element={ <PublicRoute element={ <PasswordForgotPage /> } />} />
        
          <Route path={PASSWORD_RESET_PAGE} element={ <PublicRoute element={ <PasswordResetPage /> } />} />

          <Route path={PROFILE_PAGE} element={ <ProtectedRoute element={ <ProfilePage /> } />} />

          <Route path={ORDER_HISTORY_PAGE} element={ <ProtectedRoute element={ <ProfilePage /> } />} />

          <Route path={ORDER_FEED_PAGE} element={ <OrderFeedPage /> } />

          <Route path={INGREDIENT_PAGE} element={ <IngredientDetails /> } />

          <Route path={ORDER_PAGE} element={ <OrderStructure newPage={true} /> } />
        
          <Route path={NOT_FOUND_PAGE} element={<NotFoundPage />} />  
        </Routes> )}
     
      { background &&
        (<Routes>
          <Route path={INGREDIENT_PAGE} element={ 
            <ModalBase closeModal={closeModal} >
              <IngredientDetails newPage={false} /> 
            </ModalBase>}
          />
        </Routes> )}

        { background &&
        (<Routes>
          <Route path={ORDER_PAGE} element={ 
            <ModalBase closeModal={closeModal} >
              <OrderStructure /> 
            </ModalBase>}
          />
        </Routes> )}

    </div>
  );
    
}

export default App;