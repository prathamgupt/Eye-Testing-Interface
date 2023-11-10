import { useState } from "react";
import { useHistory } from "react-router-dom";
import "../index.css";

function Test1() {
  const [ip, setIp] = useState("");
  const myStorage = window.localStorage;
  const [currentUser, setCurrentUser] = useState(myStorage.getItem("user"));
  const [text, setText] = useState(Math.floor(Math.random() * 90000) + 10000);
  const [id, setId] = useState("false");
  const [showip, setShowip] = useState("true");
  const history = useHistory();

  const test2 = () => {
    history.push("/test2");
  };

  const result = () => {
    history.push("/result1");
  };

  const home = () => {
    history.push("/");
  };

  return (
    <div className="App">
      {currentUser && (
        <div className="contente">
          {showip && (
            <div>
              <div className="control">
                <h1>{text}</h1>
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
                <button className="btn" onClick={test2}>
                  Proceed to test 2?
                </button>
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

export default Test1;
