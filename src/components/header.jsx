import React from "react"
import "../css/header.css"

class Header extends React.Component {
    render() {
        return(
            <header className="header">
                <a href="#default" className="logo">CompanyLogo</a>
                <div className="header-right">
                    <a className="active" href="#home">Home</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
            </header>
        );
    }
}

export default Header;
