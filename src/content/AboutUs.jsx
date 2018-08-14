import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../style/Home.css';
import '../style/content.css';


class AboutUs extends Component{
    render(){
        return(<div className="about" id="about">
            <div className="container">
                <h3 className="title">About Us</h3>

                <div className=" about-right wow fadeInRight animated" data-wow-delay=".5s">
                     {/* style={{visibility: visible, -webkit-animation-delay: .5s;}}>*/}
                    <h4>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical Latin established fact that a reader will be distracted Lorem Ipsum when looking at
                        its layout.</h4>
                    <p>Lorem Ipsum was popularised in the 1960s with the release of Letraset sheet content of a page
                        when looking at its layout The point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution is that it has a more of letters, as opposed to using 'Content here, content here',
                        making it look like readable English. Many desktop publishing packages and web page editors now
                        use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many
                        web sites still in their infancy. </p>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>)

    }
}
export default AboutUs;