// import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ token, redirectPath, children }) => {
  //Redirect the user if there is no token
  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }

  // Allow access to the requested page if the user is logged in
  return children;
};

export default ProtectedRoute;
