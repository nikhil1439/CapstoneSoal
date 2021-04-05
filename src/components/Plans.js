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
      }
      }

      

    render(){

        const {setType,setRecipie} = this.context;
    
        var price = 300;

       
        console.log(this.state)

       
        return(
            <div className="container-plans">
                <div className = "plan-card">
                    <div className="plan-select">
                    <div className="top-cont">
                        <div className="type-card" onClick={()=>this.setState({type:"meat"})}><button className="plan-button"><img src="Meatimg.jpg" alt="Meat&Veggies"/><p>Meat & Veggies</p></button></div>
                        <div className="type-card" onClick={()=>this.setState({type:"veg"})}><button  className="plan-button"><img src="tomato.jpg" alt="Veggies"/><p>veggies</p></button></div>
                        </div>
                        <div className="top-cont">
                        <div className="type-card" onClick={()=>this.setState({type:"lowcalorie"})}><button className="plan-button"><img src="Calories.jpg" alt="Calorie Smart"/><p>Calorie Smart</p></button></div>
                        <div className="type-card" id="pesca" onClick={()=>this.setState({type:"pesca"})}><button className="plan-button"><img src="pesca.png" alt="Pescatarian"/><p>Pescatarian</p></button></div>
                        </div>
                    </div>
                    <div className = "plan-details">
                    <ButtonToolbar aria-label="Toolbar with button groups">
                    <h6>Number of people</h6>
                        <ButtonGroup className="mr-2" aria-label="First group">
                             <Button onClick={()=>this.setState({person:2})}>2</Button>  <Button onClick={()=>this.setState({person:4})}>4</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                    <ButtonToolbar aria-label="Toolbar with button groups">
                    <h6>Recipies per week</h6>
                        <ButtonGroup className="mr-2" aria-label="First group">
                            <Button onClick={()=>this.setState({recipie:2})}>2</Button> <Button onClick={()=>this.setState({recipie:3})}>3</Button> <Button onClick={()=>this.setState({recipie:4})}>4</Button> <Button onClick={()=>this.setState({recipie:5})}>5</Button> <Button onClick={()=>this.setState({recipie:6})}>6</Button>
                        </ButtonGroup>
                    </ButtonToolbar>

                    <div className="selected-details">
                        <p>{`${this.state.recipie}`} meals for{`${this.state.person}`} people per week</p>
                        <p>Price per serving: Rs.{`${price}`}</p>
                        <p>Total: Rs.{`${price}`*`${this.state.recipie}`}</p>
                        <Link to="/productselect"><Button onClick={() => { setType(this.state.type); setRecipie(this.state.recipie); }}>Continue</Button></Link>
                        </div>
                    </div>
                   
                </div>
            </div>
        )
    }
}
export default Plans