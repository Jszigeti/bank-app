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
import ProtectedRoute from "./ProtectedRoute";

function AppRouter() {
  // Retrieve the token from the store
  const { token } = useSelector((state) => state.userReducer);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/sign-in"
          element={
            // Block access to the SignIn page if the user is logged in
            !token ? <SignIn /> : <Navigate to="/profile" replace />
          }
        />
        <Route
          path="/profile"
          element={
            // Protecting access to the Profile page
            <ProtectedRoute redirectPath="/sign-in">
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
