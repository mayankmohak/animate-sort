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
                        <label>Height : </label>
                        <input type="number" id="bar-size" className="form-control" width="10%" max="500"></input>
                        <lable>Add : </lable>
                        <button onClick={addBar.oneBar}> + </button><br></br>
                        <lable>Remove : </lable>
                        <button onClick={removeBar.oneBar}> - </button><br></br>
                        <lable>Sort : </lable>
                        <button onClick={sortingAlgorithms.bubbleSort}> Sort </button><br></br>
                        <span>Genrate Random Array : </span>
                        <label>Number of Bars : </label>
                        <input type="number" id="num-bar" placeholder="xx" className="form-control" max="100"></input>
                        <button onClick={addBar.multipleBars}> Generate </button><br></br>
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
                        <div className="message">this is message</div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}


export default Body;