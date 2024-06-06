import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ redirectPath, children }) => {
  // Retrieve the token from the store
  const { token } = useSelector((state) => state.userReducer);

  //Redirect the user if there is no token
  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }

  // Allow access to the requested page if the user is logged in
  return children;
};

export default ProtectedRoute;
