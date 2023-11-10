import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./login.css";
export default function LoginPage() {
  const myStorage = window.localStorage;
  const [currentUser, setCurrentUser] = useState(myStorage.getItem("user"));
  const [error, setError] = useState(false);
  const [show, setShow] = useState(true);
  const nameRef = useRef();
  const history = useHistory();
  const passwordRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: nameRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      const res = await axios.post("https://eye-testing-interface.onrender.com/users/login", user);
      myStorage.setItem("user", res.data.username);
      setCurrentUser(res.data.username);
      setError(false);
      setShow(false);
      history.push("/");
      alert("Successfully Logged In");
      window.location.reload(false);
    } catch (err) {
      setError(true);
    }
  };
  const home = () => {
    history.push("/");
  };
  const register = () => {
    history.push("/register");
  };
  return (
    <div className="App app">
      {show && (
        <div className="bg-success bg-opacity-75 p-4 border border-success border-2">
          <form onSubmit={handleSubmit} className="control">
            <input type="text" placeholder="username" ref={nameRef} required/>
            <input type="password" placeholder="password" ref={passwordRef} required/>
            <button className="btn">Login</button>
            {error && (
              <span className="failure">Incorrect Username or Password</span>
            )}
          </form>
          <h5>Not a user?</h5>
          <button className="btn" onClick={register}>Sign Up</button>
        </div>
      )}
    </div>
  );
}




