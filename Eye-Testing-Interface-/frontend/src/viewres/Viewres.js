import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { format } from "timeago.js";
import axios from "axios";
import "../Card/Card";
import "../index.css";
import "./Viewres.css";
import Card from "../Card/Card";
function Viewres() {
  const myStorage = window.localStorage;
  const [res, setRes] = useState([]);
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState(myStorage.getItem("user"));
  const login = () => {
    history.push("/login");
  };
  useEffect(() => {
    const getRes = async () => {
      try {
        const allRes = await axios.get("https://eye-testing-interface.onrender.com/testres");
        setRes(allRes.data);
        console.log("done");
      } catch (err) {
        console.log("problem");
      }
    };
    getRes();
  }, []);
  return (
    <div className="view-res-container">
      <h1 style={{ marginTop: "80px", textAlign: "center" }}>
        Previous Results
      </h1>
      {!currentUser && (
        <div>
          <h1>You need to login to view past results</h1>
          <button className="btn" onClick={login}>
            Login
          </button>
        </div>
      )}
      {res.map(
        (r) =>
          r.username === currentUser && (
            <Card
              vision={r.vision}
              spherical={r.spherical}
              astigmatic={r.astigmatic}
              remark={r.remark}
              created={format(r.createdAt)}
            />
          )
      )}
    </div>
  );
}
export default Viewres;
