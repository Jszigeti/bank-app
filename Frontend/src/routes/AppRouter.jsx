import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import Profile from "../pages/Profile";
import { useSelector } from "react-redux";

function AppRouter() {
  // Retrieving the token from the store
  const { token } = useSelector((state) => state.userReducer);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/sign-in"
          element={
            // Conditions the accessible routes based on the presence of the token
            !token ? <SignIn /> : <Navigate to="/profile" replace={true} />
          }
        />
        <Route
          path="/profile"
          element={
            // Conditions the accessible routes based on the presence of the token
            token ? <Profile /> : <Navigate to="/sign-in" replace={true} />
          }
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
