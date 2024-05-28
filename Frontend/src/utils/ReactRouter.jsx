import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import User from "../pages/User";

function ReactRouter() {
  const token = true;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route
          path="/user"
          element={token ? <User /> : <Navigate to="/sign-in" replace={true} />}
        />
      </Routes>
    </Router>
  );
}

export default ReactRouter;
