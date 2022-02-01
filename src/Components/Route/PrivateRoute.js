import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import authSelectors from "../../redux/auth/auth-selector";

export default function PrivateRoute({ element, redirectTo }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return <>{isLoggedIn ? element : <Navigate to={redirectTo} />}</>;
}
