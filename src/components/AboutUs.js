import React from "react"
import "./AboutUs.css"

class AboutUs extends React.Component{


    render(){
        return(
            <div className="about-cont">
                <div className="head">
                <h2>Meet Team Fresh N Fit</h2>
                </div>
            <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Quam vulputate dignissim suspendisse in est. Justo nec ultrices dui sapien eget mi proin. Sit amet porttitor eget dolor morbi non. Eu facilisis sed odio morbi quis commodo. Mi tempus imperdiet nulla malesuada pellentesque elit. Arcu dictum varius duis at consectetur lorem donec. Vel facilisis volutpat est velit egestas dui id. Aliquam purus sit amet luctus. Ullamcorper eget nulla facilisi etiam.</p>
            </div>
            <div className="img-cont">
                <img className="im" src="avatar.png" alt="img"/>
                <img className="im" src="avatar.png" alt="img"/>
                <img className="im" src="avatar.png" alt="img"/>
            </div>
            </div>
        )
    }
}

export default AboutUs