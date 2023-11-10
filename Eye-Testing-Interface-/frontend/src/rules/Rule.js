import React from "react";
import { useHistory } from "react-router-dom";
import "../index.css";
import "./Rule.css";
function Rule() {
  const history = useHistory();
  const home = () => {
    history.push("/");
  };

  return (
    <div className="rules-container">
      <h1 className="heading">Rules for taking the Eye Test</h1>
      <div className="rule">
        <ul className="list">
          <li>Stand or sit at a comfortable distance from the screen.</li>
          <li>Make sure the screen is at eye level or slightly below.</li>
          <li>
            Ensure that the room is well lit, but avoid glare on the screen.
          </li>
          <li>Take the test in a quiet environment to avoid distractions.</li>
          <li>Wear your corrective lenses (if applicable) during the test.</li>
          <li>Follow the instructions for each test carefully.</li>
          <li>Take breaks if you experience eye strain or fatigue.</li>
          <li>
            It is recomended that you use a device with a big display screen
            while taking the test
          </li>
          <li>Ensure that your browser is at 67% zoom for accurate test</li>
          <li>
            You should sit at a distance of 20 inches or 50 cm from the screen
            while taking the test
          </li>
          <li>
            Consult an eye doctor if you have concerns about your vision or eye
            health.
          </li>
        </ul>
      </div>
      <button className="btn" onClick={home}>
        Go back Home
      </button>
    </div>
  );
}

export default Rule;
