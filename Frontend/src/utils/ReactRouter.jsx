import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";

function ReactRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        {/* <Route path="/card/:id" element={<Property />} />
          <Route path="*" element={<Error />} /> */}
      </Routes>
    </Router>
  );
}

export default ReactRouter;
