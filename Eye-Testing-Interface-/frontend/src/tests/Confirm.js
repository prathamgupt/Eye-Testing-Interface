import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import LoginPage from "../Login/LoginPage";
import RegisterPage from "../Register/RegisterPage";
import "../index.css";

function Confirm() {
  const myStorage = window.localStorage;
  const [currentUser, setCurrentUser] = useState(myStorage.getItem("user"));
  const history = useHistory();
  const test1 = () => {
    history.push("/test1");
  };
  const rules = () => {
    history.push("/rules");
  };
  const login = () => {
    history.push("/login");
  };
  return (
    <div className="container">
      {currentUser ? (
        <div>
          <h1>Have you read the rules?</h1>
          <div className="btn-group">
            <button className="btn" onClick={test1}>
              Yes
            </button>
            <button className="btn" onClick={rules}>
              No
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h1>You need to login to take the test</h1>
          <button className="btn" onClick={login}>
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default Confirm;


