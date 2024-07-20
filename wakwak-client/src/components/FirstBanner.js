import React from "react";
import "./css/FirstBanner.css";

const FirstBanner = () => {
  return (
    <div className="banner">
      <img src={require("../assets/daeng4.png")} alt="Banner" />
    </div>
  );
};

export default FirstBanner;
