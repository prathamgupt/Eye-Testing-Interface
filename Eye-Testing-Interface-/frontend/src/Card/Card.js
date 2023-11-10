import React from "react";
import "./Card.css";
function Card({ vision, spherical, astigmatic, remark, created }) {
  const remarkColor = (remark == "Please Consult a doctor" ? "red" : "rgb(3, 168, 3)");
  return (
    <div class="cards ">
      <div class="card">
        <div class="box">
          <div class="content">
            <h3 style={{color:"black"}}>The test was taken {created}</h3>
            <h3 style={{color:"black"}}>{vision}</h3>
            <h3 style={{color:"black"}}>{spherical}</h3>
            <h3 style={{color:"black"}}>{astigmatic}</h3>
            <h3 style={{color: remarkColor}}>{remark}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;



