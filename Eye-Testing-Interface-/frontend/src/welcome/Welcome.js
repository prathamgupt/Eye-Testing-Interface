import React from "react";
import './Welcome.css';
import backgroundImage from './pexels-pavel-danilyuk-5996747.jpg';
function Welcome() {
  return (
    <div className="welcome-container">
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <div className="content">
        <h1 className="title">Welcome to our Eye Testing Interface</h1>
        <p className="description">
          This interface is designed to help you test your vision and get insights
          about your eye health. Whether you're looking to improve your eyesight 
          or simply monitor your eye health, we've got you covered.
        </p>
        <p className="description">
          To get started, simply create an account or log in if you're an existing
          user. Once you're logged in, you'll be able to take a series of tests
          that will evaluate your visual abilities. Our platform will provide you
          with detailed feedback on your test results, including recommendations
          on whether or not you need to visit a doctor.
        </p>
        <p className="description">
          We're excited to help you on your eye health journey. Let's get started!
        </p>
      </div>
    </div>
  );
}

export default Welcome;


