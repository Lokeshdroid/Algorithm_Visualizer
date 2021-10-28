import React from "react";
import "./home.css";
import visual_svg from "../../assests/undraw_visualization_c2ps.png";

function home() {
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${visual_svg})`
      }}
    >
      <div className="caption">
        <h1 style={{ fontSize: "3rem", marginTop: "5rem", fontWeight: "70" }}>
          {" "}
          Welcome 👋,{" "}
        </h1>
        <h2 style={{ fontSize: "2rem", marginTop: "0.5rem", fontWeight: "50" }}>
          Thanks for visiting my website.{" "}
        </h2>
        <br />
        <h2 style={{ fontSize: "2rem", marginTop: "0.5rem", fontWeight: "50" }}>
          Choose the Algorithm you want to visualize....{" "}
        </h2>
      </div>
      {/* <img src={visual_svg} alt="visualization" className="visualImg" /> */}
    </div>
  );
}

export default home;
