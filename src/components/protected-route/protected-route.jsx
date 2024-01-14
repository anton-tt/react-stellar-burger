import { Navigate, useLocation} from "react-router-dom";
import { REFRESH_TOKEN, LOGIN_PAGE } from "../../utils/constants.js";
import PropTypes from "prop-types";

function ProtectedRoute({ element }) {

  const location = useLocation();

  const refreshToken = localStorage.getItem(REFRESH_TOKEN);
  
  if (!refreshToken) {
    return <Navigate to={LOGIN_PAGE} replace={false} state={{ prev: location.pathname }} />;
  }
  return element;

}
 
ProtectedRoute.propTypes = { 
  element: PropTypes.node.isRequired
}

export default ProtectedRoute;