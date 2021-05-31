import React from "react"
import "../css/bars.css"

class Bars extends React.Component {
  render() {
    const inputheight = Number(this.props.height);
    // console.log(h8);
    const bar_style = {
      height : inputheight*5,
    }
    return(
      <React.Fragment>
        <div className="bar rounded-top shadow-lg" style={bar_style}>{inputheight}</div>
      </React.Fragment>
    );
  }
}

export default Bars;