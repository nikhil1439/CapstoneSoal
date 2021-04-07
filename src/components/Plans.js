import React from 'react'
import {ButtonToolbar,ButtonGroup,Button} from 'react-bootstrap'
import { PlanProductsContext } from "./Global/PlanProductsContext";
import "./Plans.css"
import { Link } from 'react-router-dom';


class Plans extends React.Component{

    static contextType = PlanProductsContext;
   
    constructor(){
        super();
      this.state ={
        type:"",
        person:0,
        recipie:0,
        activeIndex:null,
        activeIndex1:null,
        activePlan : null
      }
      }

      setActive = index => {
        this.setState({ activeIndex: index });
      };

      setActive1 = index => {
        this.setState({ activeIndex1: index });
      };

      setActivePlan = index =>{
          this.setState({activePlan : index});
      }

    render(){

        const {setType,setRecipie} = this.context;
    
        var price = 300;

       
        console.log(this.state)
       
        return(
            <div className="container-plans">
                <h2>Select Your Plan</h2>
                <div className = "plan-card">
                    <div className="plan-select">
                    <p style={{color:"black", fontWeight:"bolder"}}>Select Type of Meal</p>
                    <div className="top-cont">
                        <div className="type-card" onClick={()=>this.setState({type:"meat"})}><button className={this.state.activePlan=== 0 ? "active" : ""} onClick={() => this.setActivePlan(0)}id="plan-button"><img  id="im" src="Meatimg.jpg" alt="Meat&Veggies"/><p>Meat & Veggies</p></button></div>
                        <div className="type-card" onClick={()=>this.setState({type:"veg"})}><button className={this.state.activePlan=== 1 ? "active" : ""} onClick={() => this.setActivePlan(1)} id="plan-button"><img id="im" src="tomato.jpg" alt="Veggies"/><p>veggies</p></button></div>
                        </div>
                        <div className="top-cont">
                        <div className="type-card" onClick={()=>this.setState({type:"vegan"})}><button className={this.state.activePlan=== 2 ? "active" : ""} onClick={() => this.setActivePlan(2)} id="plan-button"><img id="im" src="vegan.jpg" alt="Calorie Smart"/><p>Vegan</p></button></div>
                        <div className="type-card" id="pesca" onClick={()=>this.setState({type:"pesca"})}><button className={this.state.activePlan=== 3 ? "active" : ""} onClick={() => this.setActivePlan(3)} id="plan-button"><img id="im" src="pesca.png" alt="Pescatarian"/><p>Pescatarian</p></button></div>
                        </div>
                    </div>
                    <div className = "plan-details">
                    <ButtonToolbar aria-label="Toolbar with button groups">
                    <h6>Number of people</h6>
                        <ButtonGroup className="mr-2" aria-label="First group">
                             <Button className={this.state.activeIndex === 0 ? "active" : ""} onClick={()=>{this.setState({person:2});this.setActive(0)}}>2</Button>  <Button className={this.state.activeIndex === 1 ? "active" : ""} onClick={()=>{this.setState({person:4});this.setActive(1)}}>4</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                    <ButtonToolbar aria-label="Toolbar with button groups">
                    <h6>Recipies per week</h6>
                        <ButtonGroup className="mr-2" aria-label="First group">
                            <Button className={this.state.activeIndex1 === 0 ? "active" : ""} onClick={()=>{this.setState({recipie:2});this.setActive1(0)}}>2</Button> <Button className={this.state.activeIndex1 === 1 ? "active" : ""} onClick={()=>{this.setState({recipie:3});this.setActive1(1)}}>3</Button> <Button  className={this.state.activeIndex1 === 2 ? "active" : ""}onClick={()=>{this.setState({recipie:4});this.setActive1(2)}}>4</Button> <Button  className={this.state.activeIndex1 === 3 ? "active" : ""} onClick={()=>{this.setState({recipie:5});this.setActive1(3)}}>5</Button> <Button className={this.state.activeIndex1 === 4 ? "active" : ""}onClick={()=>{this.setState({recipie:6});this.setActive1(4)}}>6</Button>
                        </ButtonGroup>
                    </ButtonToolbar>

                    <div className="selected-details">
                        <p>{`${this.state.recipie}`} meals for {`${this.state.person}`} people per week</p>
                        <p>Price per serving: Rs.{`${price}`}</p>
                        <p>Total: Rs.{`${price}`*`${this.state.recipie}`}</p>
                        <Link to="/productselect"><Button disabled={this.state.type ==="" || this.state.person===0 || this.state.recipie===0} onClick={() => { setType(this.state.type); setRecipie(this.state.recipie); }}>Continue</Button></Link>
                        </div>
                    </div>
                   
                </div>
            </div>
        )
    }
}
export default Plans