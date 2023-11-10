import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import classes from "./Navbar.module.css";
import "../index.css";

function Navbar() {
  const history = useHistory();
  const myStorage = window.localStorage;
  const [currentUser, setCurrentUser] = useState(myStorage.getItem("user"));

  const handleLogout = () => {
    myStorage.removeItem("user");
    setCurrentUser(null);
    history.push("/");
  };

  const handleLogin = () => {
    history.push("/login");
  };
  const handleHome = () => {
    history.push("/");
  };
  return (
    <nav
      class="navbar bg-dark d-flex justify-content-around ju"
      data-bs-theme="dark"
    >
      <div className={classes.logo} onClick={handleHome}>
        Eye Testing
      </div>
      <nav className={classes.nav}>
        <ul>
          <li className="ms-4">
            <NavLink to="/rules">Read Rules</NavLink>
          </li>
          <li>
            <NavLink to="/confirm">Take Test</NavLink>
          </li>
          <li>
            <NavLink to="/viewres">Past Results</NavLink>
          </li>
          {currentUser ? (
            <button className="btn" onClick={handleLogout}>
              Log out
            </button>
          ) : (
            <button className="btn" onClick={handleLogin}>
              Login
            </button>
          )}
        </ul>
      </nav>
    </nav>
  );
}

export default Navbar;
