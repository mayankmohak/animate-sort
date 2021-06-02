import React from "react"
import "../css/body.css"
import Bars from "./bars"
import "../css/bars.css"

// Dependencies
import addBar from "./addbar.js"
import removeBar  from "./deletebars.js"
import sortingAlgorithms from "./sortingalgorithms.js"

function Body () {
    return (
        <React.Fragment>
            <div className="container"><br></br>
                <div className="row inline-divs">
                    <div className="col-md-3 property-box shadow-lg">
                        
                        <h5>Height : </h5>
                        <button  className="d-inline-block sbtn  ripple-btn rounded-btn black-btn" onClick={addBar.oneBar}><i class="fas fa-plus"></i></button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input className="d-inline-block" type="number" id="bar-size" width="10%" height="100" max="500"></input>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="sbtn  ripple-btn rounded-btn black-btn" onClick={removeBar.oneBar}><i class="fas fa-minus"></i></button><br></br>
                        
                        <hr></hr>

                        <h5 className="d-inline-block">Sort : </h5> &nbsp;&nbsp;&nbsp;&nbsp;
                        <button  className="d-inline-block sbtn  neon-border-btn black-btn" onClick={sortingAlgorithms.bubbleSort}> Sort </button><br></br>
                        
                        <hr></hr>

                        <h5>Genrate Random Array Length : </h5>
                        <input type="number" id="num-bar" placeholder="xx" max="100"></input>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="sbtn  neon-border-btn black-btn" onClick={addBar.multipleBars}> Generate </button><br></br>
                    </div>
                    <div className="col-md-9 bar-box">
                        <div id="bar-container" className="horizintal-bars">
                            <Bars height="100"/>
                            <Bars height="90"/>
                            <Bars height="80"/>
                            <Bars height="70"/>
                            <Bars height="60"/>
                            <Bars height="50"/>
                        </div>
                        <div className="message">Currently support Bubble Sort only.</div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}


export default Body;