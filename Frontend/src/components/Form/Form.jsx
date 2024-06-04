import React, { useState } from "react";
import "./Form.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/user.actions";

function Form() {
  const dispatch = useDispatch();
  // Retrieving the error from the store
  const { error } = useSelector((state) => state.userReducer);
  // States creation to control the form
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Sending ids and RM when submitting the form
  const handleSubmit = (event) => {
    event.preventDefault();

    const ids = {
      email: username,
      password: password,
    };

    const rm = rememberMe;

    dispatch(login(ids, rm));
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser} />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              value={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit">Sign In</button>
        </form>
        {error && <p>Erreur: {error}</p>}
      </section>
    </main>
  );
}

export default Form;
