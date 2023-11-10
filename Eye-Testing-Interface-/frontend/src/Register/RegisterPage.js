/* global Email */
import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../index.css";
export default function Register({ setShowRegister }) {
  const history = useHistory();
  const [fail, setFail] = useState(false);
  const [otp,setOtp]=useState("");
  const [error, setError] = useState(false);
  const [show, setShow] = useState(true);
  const [sentotp,setsentOtp] = useState(Math.floor(Math.random() * 9000) + 1000);
  const [check,setCheck]=useState(false);
  const [em,setEm]=useState("");
  const [uname,setUname]=useState("");
  const [pwd,setPwd]=useState("");
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const emailValue = emailRef.current.value;
      setEm(emailValue);
      setUname(nameRef.current.value);
      setPwd(passwordRef.current.value);
      setError(false);
      setShow(false);
      setCheck(true);
      Email.send({
        SecureToken : "b014e983-88e6-40fa-a1b6-965586a01344", 
        To : emailValue, 
        From : "prathamgupta2017@gmail.com",
        Subject : "OTP For Eye testing interface",
        Body : `${sentotp}`
      }).then(
        message => alert(message)
      );
    } catch (err) {
      setError(true);
    }
  };
  const home = () => {
    history.push("/");
  };
  const checkOtp = (e) => {
    e.preventDefault();
    if(otp==sentotp){
      add();
    }
    else{
      setFail(true);
    }
  }
  const add = async (e) => {
    const newUser = {
      username: uname,
      email: em,
      password: pwd,
    };
    try{
        await axios.post("https://eye-testing-interface.onrender.com/users/register", newUser);
        setCheck(false);
    }catch(err){
      setError(true);
    }
  }
  return (
    <div className="App app">
      {show && (
        <div className="bg-success bg-opacity-75 p-4 border border-success border-2">
          <form onSubmit={handleSubmit} className="control">
            <input type="text" placeholder="username" ref={nameRef} required/>
            <input type="email" placeholder="email" ref={emailRef} required/>
            <input type="password" placeholder="password" ref={passwordRef} required/>
            <button className="btn">Verify email</button>
            {error && <span className="failure">The entered username or email already exists</span>}
          </form>
        </div>
      )}
      {!show && (
        <div>
          {!error && check && 
            <div className="bg-success bg-opacity-75 p-4 border border-success border-2">
          <form onSubmit={checkOtp} className="control">
            <input type="text" value={otp} placeholder="Enter OTP" onChange={(e)=>setOtp(e.target.value)} required/>
            <button className="btn">Verify</button>
            {fail  && <p className="fail">Try again</p>}
          </form> </div>}
          {!error && !check && 
            <div>
              <span className="success">Successful. You can login now</span>
              <button onClick={home} className="btn">
                Go home
              </button>
            </div>
          }
          {error && <p>The entered email already exists</p>}
        </div>
      )
      }
    </div>
  );
}
