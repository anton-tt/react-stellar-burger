import { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useLocation, useNavigate} from "react-router-dom";
import AppHeader from "../app-header/app-header.jsx";
import BurgerConstructorContainer from "../burger-constructor-container/burger-constructor-container.jsx";
import ModalBase from "../modal-base/modal-base.jsx";
import RegisterPage from "../../pages/register/register.jsx";
import LoginPage from "../../pages/login/login.jsx";
import PasswordForgotPage from "../../pages/password-forgot/password-forgot.jsx";
import PasswordResetPage from "../../pages/password-reset/password-reset.jsx";
import ProfilePage from "../../pages/profile/profile.jsx";
import OrderHistoryPage from "../../pages/order-history/order-history.jsx";
import OrderFeedPage from "../../pages/order-feed/order-feed.jsx";
import NotFoundPage from "../../pages/not-found/not-found.jsx";
import { HOME_PAGE, REGISTER_PAGE, LOGIN_PAGE, PASSWORD_FORGOT_PAGE, PASSWORD_RESET_PAGE, PROFILE_PAGE, ORDER_FEED_PAGE, 
  ORDER_HISTORY_PAGE, INGREDIENT_PAGE, NOT_FOUND_PAGE } from "../../utils/constants.js";
import { getUser } from "../../services/actions/user-get.js"; 
import ProtectedRoute from "../../components/protected-route/protected-route.jsx";  
import PublicRoute from "../../components/public-route/public-route.jsx";
import styles from "./app.module.css";
import IngredientDetails from "../ingredient-details/ingredient-details.jsx";

function App() {

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  //const history = useHistory();
  const getCurrentUserData = (store) => store.getUserData;
  const { getUserRequest, getUserFailed, successGetUser, getUserData } = useSelector(getCurrentUserData);

  const background = location.state && location.state.background;


  /*useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);*/

 //isProtected={false}
  /*
  />*/
  /*<Route path={ORDER_HISTORY_PAGE} element={ <ProtectedRoute element={ <ProfilePage /> } />} />
          <ProtectedRoute isProtected={true}>
            <ProfilePage />
          </ProtectedRoute> }
        />*/


        const closeModal = () => {
         // history.push("/"); /// !!!!!!!!
         navigate(-1);
      };
  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes>
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
          <Route path={INGREDIENT_PAGE} 
                 element={ 
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