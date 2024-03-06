import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "../../hooks/hooks";

import PublicRoute from "../public-route/public-route";
import ProtectedRoute from "../protected-route/protected-route";  

import AppHeader from "../app-header/app-header";
import BurgerConstructorContainer from "../burger-constructor-container/burger-constructor-container";
import ModalBase from "../modal-base/modal-base";
import RegisterPage from "../../pages/register/register";
import LoginPage from "../../pages/login/login";
import PasswordForgotPage from "../../pages/password-forgot/password-forgot";
import PasswordResetPage from "../../pages/password-reset/password-reset";
import ProfilePage from "../../pages/profile/profile";
import OrderFeedPage from "../../pages/order-feed/order-feed";
import NotFoundPage from "../../pages/not-found/not-found";

import { HOME_PAGE, REGISTER_PAGE, LOGIN_PAGE, PASSWORD_FORGOT_PAGE, PASSWORD_RESET_PAGE, PROFILE_PAGE, ORDER_FEED_PAGE, 
  ORDER_HISTORY_PAGE, ORDER_PAGE, INGREDIENT_PAGE, NOT_FOUND_PAGE } from "../../utils/constants";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderStructure from "../order-structure/order-structure";

import { getCurrentUserData, getIngredientsData } from "../../services/selectors";
import { getIngredientsList } from "../../services/actions/burger-ingredients";
import styles from "./app.module.css";

function App() {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const location = useLocation();

  const background = location.state && location.state.background;

  const { getUserSuccess, getUserData } = useSelector(getCurrentUserData);
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

          <Route path={INGREDIENT_PAGE} element={ <IngredientDetails  newPage={true}/> } />

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
              <OrderStructure newPage={false} /> 
            </ModalBase>}
          />
        </Routes> )}

    </div>
  );
    
}

export default App;