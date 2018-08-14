import React, { Component } from "react";
import "./style/Home.css";
import "bootstrap/dist/css/bootstrap.css";

class Footer extends Component{
    render(){
       return  (<footer className="blog-footer">
            <p>
                Blog template built for{" "}
                <a href="https://getbootstrap.com/">Bootstrap</a> by{" "}
                <a href="https://twitter.com/mdo">@mdo</a>.
            </p>
            <p>
                <a href="">Back to top</a>
            </p>
        </footer>)
    }
}

export default Footer;