import React from "react";
import "./Signin.css";
import"../index.css"
import {Link, Redirect,Switch} from "react-router-dom";
import Fire from "./firebase"
//import {Button,Form,Row,Col,Card} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

class Signin extends React.Component{
    constructor(){
        super();
      this.state ={
        email:"",
        password:"",
        isLogin:false
      }
      }
      onChange = (e) =>{
        this.setState ( {email: e.target.value})
      }
      changeHandler = (e) =>
      {
        this.setState ({password: e.target.value})
      }
      onClick =(e) =>{
        e.preventDefault()
        
        Fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
          .then((u) => {
            console.log('Successfully Logged In');
           // alert('Successfully Logged In')
            this.setState({isLogin:true})
          })
          .catch((e) => {
            console.log('Error: ' + e.toString());
            return(alert(e.toString()))
            
          })
    }
    onClick1 =() =>{
      
      <Redirect to="/Signup"/>
    }
    
    render(){
        console.log(this.props)
        console.log(this.state)
        if(this.state.isLogin)
        {
            return(
            <Redirect to="/"/>
            )
        }
        if(this.props.logout !== "") 
        {
            return(
                <Redirect to="/"/>)
        }
        
    
         
    return(
      <div className="outer">
      <div className="inner">
        <Switch>  
      <form>

      <h3>Log in</h3>

      <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="Enter email" onChange = {this.onChange} />
      </div>

      <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" onChange ={this.changeHandler}/>
      </div>

      <div className="form-group">
          <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck1" />
              <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
          </div>
      </div>

      <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={this.onClick}>Sign in</button>
      <p className="forgot-password text-right">
          Forgot <a href="#vvv">password?</a>
      </p>
      <p>Doesn't have account alreday <Link to ="/register"><span>Signup</span></Link></p> 
  </form>
  </Switch> 
    </div>
    </div>
    )
    }
}
export default Signin