import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../index.css";
import "./result.css";
function Result5() {
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
      vision: "Vision: 6/18",
      spherical: "Approximate Spherical Refractive Error: 1.00",
      astigmatic: "Approximate Astigmatic Refractive Error: 2.00",
      remark: "Please Consult a Doctor",
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
      const emailBody = `Dear ${currentUser},\n\nHere is your Eye Test Result:\n\nVision: 6/18\nApproximate Spherical Refractive Error: 1.00\nApproximate Approximate Astigmatic Refractive Error: 2.00\nPlease Consult a doctor\n\nThank you!`;

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
          <h2>Vision: 6/18</h2>
          <h2>Approximate Spherical Refractive Error: 1.00</h2>
          <h2>Approximate Astigmatic Refractive Error: 2.00</h2>
          <h2 className="bad">Please Consult a Doctor</h2>
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

export default Result5;
