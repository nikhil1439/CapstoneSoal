import React from "react"
import "./Signin.css"
import Fire from "./firebase"
import { Redirect,Link,Switch } from "react-router-dom";



class Signup extends React.Component{

  constructor(){
    super()
    this.state ={
      name:"",
      email :"",
      password:"",
      isSignedup:"false"
    }
  }

  onChange = (e)=>{
    this.setState({email: e.target.value})
  }
  changeHandler = (e) =>{
    this.setState({password: e.target.value})
  }
  /*changeHandler1 = (e)=>{
    this.setState({confirmpassword: e.target.value})
  }*/

     onClick= (e) =>{ 
      e.preventDefault()

        Fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then((u) => {

            console.log('Successfully Signed Up');
            alert("Signup Successfull")
            this.setState ({isSignedup:true}) ;})
          .catch((err) => {
            console.log('Error: ' + err.toString());
            alert(err.toString())
          })
      }
    render(){
      if(this.state.isSignedup === true)
      {
        return (
          <Redirect to ="/"/>
        )
      }
        return(
          <div className="outer">
      <div className="inner">
        <Switch> 
          <form>
          <h3>Register</h3>

          <div className="form-group" Id="name">
              <label>UserName</label>
              <input type="text" className="form-control" placeholder="UserName" />
          </div>

          <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="Enter email" onChange={this.onChange} />
          </div>

          <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password"onChange={this.changeHandler} />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={this.onClick}>Register</button>
          <p className="forgot-password text-right">
              Already registered <Link to="/Signin">log in?</Link>
          </p>
      </form>
      </Switch> 
    </div>
    </div>
        )
    }
  }

export default Signup