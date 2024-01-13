import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useLocation} from "react-router-dom";
import { Input, EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { HOME_PAGE, LOGIN_PAGE, REFRESH_TOKEN } from "../../utils/constants.js";
import { getUser } from "../../services/actions/user-get.js";
import { updateUser } from "../../services/actions/user-update.js";


function PublicRoute({element/*isProtected, children*/}) { // типы пропсов контроль

  const location = useLocation();

  /*const getLoginUserData = (store) => store.loginUserData;
  const { loginRequest, loginFailed, successLogin } = useSelector(getLoginUserData);*/

 /* const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);*/

const refreshToken = localStorage.getItem(REFRESH_TOKEN);
  const getCurrentUserData = (store) => store.getUserData;
  const { getUserRequest, getUserFailed, successGetUser, getUserData } = useSelector(getCurrentUserData);

  const { from } = location.state || { from: { pathname: HOME_PAGE } };
  const { from2 } = location.pathname || { from: { pathname: HOME_PAGE } };
  /*const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser()); && (getUserData === true)
  }, [dispatch]);*/


  /*console.log(isProtected);
    console.log(refreshToken);
    console.log(!refreshToken);
    
    console.log(getUserData);*/
 /* if (!isProtected && !refreshToken) {
    console.log("1");
    return children;
  } else if (!isProtected && refreshToken) {
    console.log("2");
    console.log(isProtected);
    console.log(refreshToken);
    console.log(from);
    return <Navigate to={from} />
  } else if (isProtected && !refreshToken) {
    console.log("3");
    console.log(location); //
    return <Navigate to={LOGIN_PAGE} state={{ from: location }} />
  } else /*if (isProtected && refreshToken)*/// {
 /*   console.log("4");
    console.log(isProtected);
    console.log(refreshToken);
    console.log(children);
    console.log(location);
    return children;
  }

  
}
  
 /* console.log(isProtected);
  console.log(getUserData);
  console.log(!getUserData);
  return children;}*/

  

  if (refreshToken) {
    return <Navigate to='/' replace={true} />; //////!!!!!!!!!!!!!!!!!!!!
  }

  return element;

}
 
export default PublicRoute;