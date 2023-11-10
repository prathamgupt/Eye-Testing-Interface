import { useState } from "react";
import { useHistory } from "react-router-dom";
import "../index.css";
function Test7() {
  const [ip, setIp] = useState("");
  const [text, setText] = useState(Math.floor(Math.random() * 90000) + 10000);
  const myStorage = window.localStorage;
  const [currentUser, setCurrentUser] = useState(myStorage.getItem("user"));
  const [id, setId] = useState("false");
  const [showip, setShowip] = useState("true");
  const history = useHistory();
  const home = () => {
    history.push("/");
  };
  const result = () => {
    history.push("/result7");
  };
  const result8 = () => {
    history.push("/result8");
  };
  return (
    <div className="App">
      {currentUser && (
        <div className="contente">
          {" "}
          {showip && (
            <div>
              <div className="control">
                <h6>{text}</h6>
                <input
                  type="text"
                  value={ip}
                  onChange={(e) => setIp(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn"
                onClick={(e) => {
                  setId(true);
                  setShowip(false);
                }}
              >
                Submit
              </button>
            </div>
          )}
          {id === true ? (
            <div>
              {ip == text ? (
                <div>
                  <button className="btn" onClick={result8}>
                    View Result?
                  </button>
                  <button className="btn" onClick={home}>
                    Go home?
                  </button>
                </div>
              ) : (
                <div>
                  <h1>Test failed</h1>
                  <button className="btn" onClick={result}>
                    View Result?
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div>
              <h1>Enter the Numbers Shown Above</h1>
              <button className="btn btn-exit" onClick={home}>
                End test
              </button>
            </div>
          )}
        </div>
      )}
      {!currentUser && <h1>You need to Login first</h1>}
    </div>
  );
}
export default Test7;
