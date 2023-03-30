import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../index.css";
export default function Register({ setShowRegister }) {
  const history = useHistory();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(true);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      username: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      await axios.post("https://eye-testing-interface.onrender.com/users/register", newUser);
      setError(false);
      setSuccess(true);
      setShow(false);
    } catch (err) {
      setError(true);
    }
  };
  const home = () => {
    history.push("/");
  };
  return (
    <div className="App app">
      {show && (
        <div className="bg-success bg-opacity-75 p-4 border border-success border-2">
          <form onSubmit={handleSubmit} className="control">
            <input type="text" placeholder="username" ref={nameRef} />
            <input type="email" placeholder="email" ref={emailRef} />
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="btn">Register</button>
            {error && <span className="failure">The entered username or email already exists</span>}
          </form>
        </div>
      )}
      {!show && (
        <div>
          <span className="success">Successful. You can login now</span>
          <button onClick={home} className="btn">
            Go home
          </button>
        </div>
      )}
    </div>
  );
}
