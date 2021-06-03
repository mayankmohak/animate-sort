import React from "react"
import Bars from "./bars"

const Display = () => {
  return(
    <div className="col-md-9 bar-box">
        <div id="bar-container" className="horizintal-bars">
            <Bars height="100"/>
            <Bars height="90"/>
            <Bars height="80"/>
            <Bars height="70"/>
            <Bars height="60"/>
            <Bars height="50"/>
        </div>
        <div className="message">Currently support Bubble Sort.</div>
    </div>
  );
}

export default Display;