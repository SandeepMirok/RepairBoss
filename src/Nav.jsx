import React, { Component } from "react";
import "./style/Home.css";
import "bootstrap/dist/css/bootstrap.css";

class Nav extends Component{
    render(){
        return (
            <div className="nav-scroller py-1 mb-2">
                <nav className="nav ">
                    <a className="p-2 text-muted flex-auto " href="">
                        Home
                    </a>
                    <a className="p-2 text-muted flex-auto" href="">
                        Service & Repair
                    </a>
                    <a className="p-2 text-muted flex-auto" href="">
                        Repair Prices
                    </a>
                    <a className="p-2 text-muted flex-auto" href="">
                        Diagnostic
                    </a>
                    <a className="p-2 text-muted flex-auto" href="">
                        Reviews
                    </a>
                    <a className="p-2 text-muted flex-auto" href="">
                        My Car
                    </a>
                    <a className="p-2 text-muted flex-auto" href="">
                        Contact
                    </a>
                </nav>
            </div>
        )
    }
}

export default Nav;