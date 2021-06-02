import React from "react";
import "../css/footer.css"

class Footer extends React.Component {
    render() {
        return(
            <footer>
                <div className="row">
                    <div className="container">
                        <hr></hr>
                        <h5>
                            Build to learn React <img src="https://img.icons8.com/color/64/000000/react-native.png" alt="ReactJS" /> by <a href="https://mayankmohak.github.io/portfolio/">mayankmohak</a>
                            <a href="https://www.facebook.com/mayank.shrivastava.75641"><img src="https://img.icons8.com/cute-clipart/64/000000/facebook-new.png" alt="facebook" /></a>
                            <a href="https://www.linkedin.com/in/mayankmohak"><img src="https://img.icons8.com/cute-clipart/64/000000/linkedin.png" alt="LinkedIn" /></a>
                            <a href="https://github.com/mayankmohak"><img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" /></a>
                            <a href="https://twitter.com/mohak_mayank"><img src="https://img.icons8.com/cute-clipart/64/000000/twitter.png" alt="twitter"/></a>
                        </h5>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;