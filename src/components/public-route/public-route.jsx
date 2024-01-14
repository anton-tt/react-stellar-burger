import { Navigate, useLocation } from "react-router-dom";
import { REFRESH_TOKEN, HOME_PAGE } from "../../utils/constants.js";
import PropTypes from "prop-types";

function PublicRoute({ element }) {

  const location = useLocation();
  
  const refreshToken = localStorage.getItem(REFRESH_TOKEN);

  if (refreshToken) {
    return <Navigate to={location?.state?.prev || HOME_PAGE} replace={true} state={{ prev: location.pathname }}/>
  }
  return element;

}
 
PublicRoute.propTypes = { 
  element: PropTypes.node.isRequired
}

export default PublicRoute;