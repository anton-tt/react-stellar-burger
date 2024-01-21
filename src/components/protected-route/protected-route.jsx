import { useEffect } from "react";
import { Navigate, useLocation} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ACCESS_TOKEN, REFRESH_TOKEN, LOGIN_PAGE } from "../../utils/constants.js";
import { getCookie } from "../../utils/cookie.js";
import { tokenUpdate } from "../../services/actions/token-update.js";
import PropTypes from "prop-types";

function ProtectedRoute({ element }) {

  const dispatch = useDispatch();

  const location = useLocation();
 
  const isLoggedIn = getCookie(ACCESS_TOKEN);
  const refreshToken = localStorage.getItem(REFRESH_TOKEN);

  useEffect(() => {
    return refreshToken && !isLoggedIn && dispatch(tokenUpdate())
  }, [dispatch]);

  if (!refreshToken) {
    return <Navigate to={LOGIN_PAGE} replace={false} state={{ prev: location.pathname }} />
  }
  return element;

}
 
ProtectedRoute.propTypes = { 
  element: PropTypes.node.isRequired
}

export default ProtectedRoute;