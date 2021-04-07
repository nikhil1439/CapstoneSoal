import React from "react"
import "./Home.css"
//import { Redirect } from "react-router";
//import Signin from "./Signin"
//import { Redirect } from "react-router";
import {Link} from "react-router-dom";
//import Fire from "../firebase"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel,Button} from 'react-bootstrap';


class Home extends React.Component{

        render(){
          return(

        <div className="container" style={{width:"100%"}}>
          <div className="carousel-cont">
           <Carousel fade id="crousel-outer">
           <Carousel.Item>
             <img
             className="d-block w-100"
             src="Hompage-image.jpg"
             alt="First slide"
             />
          
          </Carousel.Item>
          
          <Carousel.Item>
          <img
          className="d-block w-100"
             src="Homepage-image21.jpg"
           alt="Second slide"
          />
          </Carousel.Item>
          </Carousel>
          </div>
          <div className="container2">
             <h1>How It Works</h1>
           <div className ="Step-container">
             <img className="img-1" src="hiw-plan.jpg" alt="please wait"/>
           <div className="text-cont1">
             <div className="circle">Step1</div>
           <h3>Pick A Plan</h3>
           <p>Whether cooking for yourself or your household, we have a flexible plan to match your lifestyle. Need to cancel, change meals, or skip a week? Not a problem.</p>
           </div>
           </div>
           <div className="Step-container">
             <div className="text-cont1" id="txt">
             <div className="circle">Step2</div>
               <h3>Get Your Delivery</h3>
               <p>Each week, you’ll open simple step-by-step recipes complete with nutritional information and fresh, pre-measured ingredients to get you whipping up delicious dinners in no time.</p>
               </div>
               <img className="img-1" id="img" src="hiw-delivery.jpg" alt="please wait"/>
               
           </div>
           <div className="Step-container">
                 <img className="img-1" src="hiw-family.jpg" alt="please wait"/>
               <div className="text-cont1">
                 <div className="circle">Step3</div>
               <h3>Cook, eat, enjoy!</h3>
               <p>The old “what do you want to eat?” conversation is about to be banished from your life. Welcome to a world where dinner is always planned, simple, and delicious.</p>
           </div>
           </div>
           <Link to='/plans'><Button className="butt" type="primary">Get Started</Button></Link>
           </div>
           </div>
          
          )}
  }
export default Home