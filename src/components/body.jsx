import React from "react"
import "../css/body.css"
import "../css/bars.css"
import Display from "./displayarea.jsx"

// Dependencies
import addBar from "./addbar.js"
import removeBar  from "./deletebars.js"
import sortingAlgorithms from "./sortingalgorithms.js"

function Body () {
    return (
        <React.Fragment>
            <div className="container"><br />
                <div className="row inline-divs">
                    <div className="col-md-3 property-box shadow-lg">
                        
                        <h5>Height : </h5>
                        <button  className="d-inline-block sbtn  ripple-btn rounded-btn black-btn" onClick={addBar.oneBar}><i class="fas fa-plus"></i></button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input className="d-inline-block" type="number" id="bar-size" width="10%" height="100" max="500"></input>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="sbtn  ripple-btn rounded-btn black-btn" onClick={removeBar.oneBar}><i class="fas fa-minus"></i></button><br /> 
                        
                        <hr />

                        <h5 className="d-inline-block">Sort : </h5> &nbsp;&nbsp;&nbsp;&nbsp;
                        <button id="sort-button" className="d-inline-block sbtn  neon-border-btn black-btn" onClick={sortingAlgorithms.bubbleSort}> Sort </button>&nbsp;&nbsp;&nbsp;&nbsp;
                        
                        <hr />

                        <h5>Genrate Random Array Length : </h5>
                        <input type="number" id="num-bar" placeholder="xx" max="100"></input>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="sbtn  neon-border-btn black-btn" onClick={addBar.multipleBars}> Generate </button><br />

                        <hr />

                        <h5>Speed : </h5>
                        <input type="number" id="num-bar" placeholder="xx" max="100"></input>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="sbtn  neon-border-btn black-btn" onClick={ sortingAlgorithms.abortSort}> Stop </button><br />

                    </div>
                    <Display />
                </div>
            </div>
        </React.Fragment>
    );
}


export default Body;