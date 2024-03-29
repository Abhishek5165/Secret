import React from "react";
import "./style.scss";
import cloud from "../../images/cloud.png";
import cloud_soft from "../../images/cloud-soft.png";
import Navigation from "./navigation/Navigation";
import IntroContent from "./intro-content/IntroContent";

const Intro = () => {
  return (
    <div className="Intro-section">
      <div className="vector-bg" id="parallax"></div>

      <img src={cloud} className="cloud" />
      <img src={cloud_soft} className="cloud-soft" />

      <div className="content">
        <Navigation />
        <IntroContent />
      </div>
    </div>
  );
};

export default Intro;
