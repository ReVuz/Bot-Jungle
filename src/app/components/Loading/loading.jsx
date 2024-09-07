import React from "react";
import "./Style.css";

function loading() {
  return (
    <div className="loadingspinner top-[250px]">
      <div id="square1"></div>
      <div id="square2"></div>
      <div id="square3"></div>
      <div id="square4"></div>
      <div id="square5"></div>
    </div>
  );
}

export default loading;
