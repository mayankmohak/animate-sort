import React from "react"
import "../css/body.css"
import "../css/bars.css"
import Display from "./displayarea.jsx"

// Dependencies
import addBar from "./addbar.js"
import removeBar  from "./deletebars.js"
import sortingAlgorithms from "./sortingalgorithms.js"


//components
const algoList = ["Bubble Sort"] // "Insertion Sort" "Selection Sort" "Merge Sort"
const algoListOption = algoList.map((algo) => <option key={algo}>{algo}</option>)
const selectInputFormatted = (
    <select>
        {algoListOption}
    </select>
)

const speedList = ["1x" , "2x" , "3x" , "4x"]
const speedListOption = speedList.map((speed) => <option key={speed}>{speed}</option>)
const selectSpeedFormatted = (
    <select id="time">
        {speedListOption}
    </select>
)
const plus = ( <i className="fas fa-plus"></i> )
const minus = ( <i className="fas fa-minus"></i> )

function Body () {
    return (
        <React.Fragment>
            <div className="container"><br />
                <div className="row inline-divs">
                    <div className="col-md-3 property-box shadow-lg">
                        
                        <h5>Add Number : </h5>
                            <button
                              className = "d-inline-block sbtn  ripple-btn rounded-btn black-btn"
                              onClick={addBar.oneBar} >
                                {plus}
                            </button>&nbsp;&nbsp;&nbsp;&nbsp;

                            <input className="d-inline-block" type="number" id="bar-size" width="10%" height="100" max="500"></input>&nbsp;&nbsp;&nbsp;&nbsp;
                            
                            <button
                              className = "d-inline-block sbtn  ripple-btn rounded-btn black-btn"
                              onClick = {removeBar.oneBar} >
                                {minus}
                            </button>&nbsp;&nbsp;&nbsp;&nbsp;
                        
                        <hr />

                        <h5 className="d-inline-block">Sorting Algorithm : </h5> &nbsp;&nbsp;&nbsp;&nbsp;
                        {selectInputFormatted}&nbsp;&nbsp;&nbsp;
                        {selectSpeedFormatted}&nbsp;&nbsp;&nbsp;
                        <button
                          id = 'sort-button'
                          className = "d-inline-block sbtn neon-border-btn black-btn"
                          onClick = {sortingAlgorithms.bubbleSort} >
                            Sort
                        </button>
                        
                        <hr />

                        <h5>Genrate Random Array Length : </h5>
                        <input type="number" id="num-bar" placeholder="xx" max="100"></input>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button
                          id = "generate-button"
                          className = "d-inline-block sbtn neon-border-btn black-btn"
                          onClick={addBar.multipleBars} >
                            Generate
                        </button>
                        
                        <br />

                        <hr />
                    </div>
                    <Display />
                </div>
            </div>
        </React.Fragment>
    );
}


export default Body;