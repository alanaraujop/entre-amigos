import React from "react";

import "./Loading.scss";
import logo from "../../assets/images/menu-logo.png";

function Loading() {
  return (
    <div id="splash-screen">
      <img src={logo} alt="logo entre amigos" />
    </div>
  );
}

export default Loading;
