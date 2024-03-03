import { Navigate, useLocation } from "react-router-dom";
import { REFRESH_TOKEN, HOME_PAGE } from "../../utils/constants";

type TPublicRouteProps = {
  element: JSX.Element;
};

function PublicRoute({ element }: TPublicRouteProps) {

  const location = useLocation();
  
  const refreshToken = localStorage.getItem(REFRESH_TOKEN);

  if (refreshToken) {
    return <Navigate to={location?.state?.prev || HOME_PAGE} replace={true} state={{ prev: location.pathname }}/>
  }
  return element;

}

export default PublicRoute;