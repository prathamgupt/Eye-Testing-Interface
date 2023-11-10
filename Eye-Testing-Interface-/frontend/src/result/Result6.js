import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../index.css";
import "./result.css";
function Result6() {
  const history = useHistory();
  const home = () => {
    history.push("/");
  };
  const myStorage = window.localStorage;
  const [currentUser, setCurrentUser] = useState(myStorage.getItem("user"));
  const [result, setRes] = useState([]);
  const [user, setUser] = useState([]);
  const [saved, setSave] = useState(false);

  useEffect(() => {
    const getRes = async () => {
      try {
        const allRes = await axios.get("https://eye-testing-interface.onrender.com/testres");
        setRes(allRes.data);
      } catch (err) {
        console.log("problem");
      }
    };
    getRes();
  }, []);
  useEffect(() => {
    const getUser = async () => {
      try {
        const allUser = await axios.get("https://eye-testing-interface.onrender.com/users/user");
        setUser(allUser.data);
        console.log("ok");
      } catch (err) {
        console.log("problem");
      }
    };
    getUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRes = {
      username: currentUser,
      vision: "Vision: 6/12",
      spherical: "Approximate Spherical Refractive Error: 0.75",
      astigmatic: "Approximate Astigmatic Refractive Error: 1.50",
      remark: "You have good vision",
    };

    try {
      const res = await axios.post("https://eye-testing-interface.onrender.com/testres", newRes);
      setRes([...result, res.data]);
      setSave(true);
    } catch (err) {
      console.log("problem");
    }
  };
  const [userMail, setUserMail] = useState("");
  useEffect(() => {
    if (user.length > 0) {
      const currentUserEmail = user.find(
        (r) => r.username === currentUser
      )?.email;
      setUserMail(currentUserEmail || "");
    }
  }, [currentUser, user]);
  const handleMail = () => {
    if (userMail) {
      const emailSubject = "Eye Test Result";
      const emailBody = `Dear ${currentUser},\n\nHere is your Eye Test Result:\n\nVision: 6/12\nApproximate Spherical Refractive Error: 0.75\nApproximate Astigmatic Refractive Error: 1.50\nYou have good vision\n\nThank you!`;

      const mailToLink = `mailto:${userMail}?subject=${encodeURIComponent(
        emailSubject
      )}&body=${encodeURIComponent(emailBody)}`;

      window.open(mailToLink);
    }
  };
  return (
    <div className="App">
      {currentUser && (
        <div className="contente">
        <h2>Here is your result: </h2>
          <h2>Vision: 6/12</h2>
          <h2>Approximate Spherical Refractive Error: 0.75</h2>
          <h2>Approximate Astigmatic Refractive Error: 1.50</h2>
          <h2 className="good">You have good vision</h2>
          {!saved && (
            <button className="btn" onClick={handleSubmit}>
              Save Result?
            </button>
          )}
          <button className="btn" onClick={home}>
            Go home?
          </button>
          <button className="btn" onClick={handleMail}>
            Send result to mail?
          </button>
          {saved && <h2>Result Saved Successfully</h2>}
        </div>
      )}
      {!currentUser && <h1>You need to Login first</h1>}
    </div>
  );
}

export default Result6;
