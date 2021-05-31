import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/header"
import Body from "./components/body"
import Footer from "./components/footer"
import "bootstrap/dist/css/bootstrap.css"

ReactDOM.render(<Header />,document.getElementById('head'));
ReactDOM.render(<Body />,document.getElementById('body'));
ReactDOM.render(<Footer />,document.getElementById('foot'));