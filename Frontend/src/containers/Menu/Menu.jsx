import { NavLink } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import "./Menu.style.css";

function Menu() {
  const token = false;

  return (
    <nav className="main-nav">
      <NavLink to="/">
        <Logo />
      </NavLink>
      <div className="main-nav-item">
        {!token ? (
          <NavLink className="main-nav-item" to="/sign-in">
            <FontAwesomeIcon icon={faCircleUser} />
            <span> Sign In</span>
          </NavLink>
        ) : (
          <>
            <NavLink className="main-nav-item" to="/user">
              <FontAwesomeIcon icon={faCircleUser} />
              <span> userId</span>
            </NavLink>
            <NavLink className="main-nav-item" to="/">
              <FontAwesomeIcon icon={faRightFromBracket} />
              <span> Sign out</span>
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default Menu;
