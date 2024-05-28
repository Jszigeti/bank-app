import { NavLink } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "./Menu.style.css";

const isConnected = false;

function Menu() {
  return (
    <nav className="main-nav">
      <NavLink to="/">
        <Logo />
      </NavLink>
      <div className="main-nav-item">
        {!isConnected ? (
          <NavLink className="main-nav-item" to="/sign-in">
            <FontAwesomeIcon icon={faCircleUser} />
            <span> Sign In</span>
          </NavLink>
        ) : (
          ""
        )}
      </div>
    </nav>
    //   <nav class="main-nav">
    //   <a class="main-nav-logo" href="./index.html">
    //     <img
    //       class="main-nav-logo-image"
    //       src="./img/argentBankLogo.png"
    //       alt="Argent Bank Logo"
    //     />
    //     <h1 class="sr-only">Argent Bank</h1>
    //   </a>
    //   <div>
    //     <a class="main-nav-item" href="./sign-in.html">
    //       <i class="fa fa-user-circle"></i>
    //       Sign In
    //     </a>
    //   </div>
    // </nav>
  );
}

export default Menu;
