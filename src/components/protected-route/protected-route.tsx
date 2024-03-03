import { useEffect } from "react";
import { Navigate, useLocation} from "react-router-dom";
import { useDispatch } from "react-redux";
import { ACCESS_TOKEN, REFRESH_TOKEN, LOGIN_PAGE } from "../../utils/constants";
import { getCookie } from "../../utils/cookie";
import { tokenUpdate } from "../../services/actions/token-update";

type TProtectedRouteProps = {
  element: JSX.Element;
};

function ProtectedRoute({ element }: TProtectedRouteProps) {

  const dispatch = useDispatch();

  const location = useLocation();
 
  const isLoggedIn = getCookie(ACCESS_TOKEN);
  const refreshToken = localStorage.getItem(REFRESH_TOKEN);

  useEffect(() => {
    refreshToken && !isLoggedIn && dispatch(tokenUpdate())
  }, [dispatch]);

  if (!refreshToken) {
    return <Navigate to={LOGIN_PAGE} replace={false} state={{ prev: location.pathname }} />
  }
  return element;

}

export default ProtectedRoute;