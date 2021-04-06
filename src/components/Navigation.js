import React, { useContext} from 'react'
import {Link} from "react-router-dom"
import "./Navigation.css"
import Fire from "./firebase"
import { NavDropdown } from 'react-bootstrap';
import { CartContext } from './Global/CartContext'


export const Navigation = (props) =>
{
    const {totalQty } = useContext(CartContext);
      
    const onClick=()=> {
        Fire.auth().signOut()
    }
   
        if(props.logout === "" ){
            return(
        <div className = 'nav-cont'>
             <nav className="nav">
            <Link to="/"><img className="logo" src="Logo3.png" alt="please wait"/></Link> 
            <Link to="/" style={{ textDecoration:'none'}}><p className="nav-link">Home</p></Link>
            <NavDropdown title="Our Menus" id="nav-dropdown">
             <NavDropdown.Item eventKey="4.1" ><Link to="/diykits" style={{ textDecoration:'none'}}>DIY Kits</Link></NavDropdown.Item>
             <NavDropdown.Item eventKey="4.2"><Link to="/cookedmeals" style={{ textDecoration:'none'}}>Cooked Meals</Link></NavDropdown.Item>
            </NavDropdown>
            <Link to="/howitworks" style={{ textDecoration:'none'}}><p className="nav-link">How it works</p></Link>
            <Link to="/plans" style={{ textDecoration:'none'}}><p className="nav-link">Plans</p></Link>
            <Link to="/aboutus" style={{ textDecoration:'none'}}><p className="nav-link">AboutUs</p></Link>
            <i id="cart" onClick={()=> alert("please login")} className="fas fa-shopping-cart"/>
            <Link to="/login" style={{ textDecoration:'none'}}><p className="nav-link">Login</p></Link>
            </nav>

        </div>
        )}
        else
        {
            return(
            <div className = 'nav-cont'>
             <nav className="nav">
            <Link to="/"><img className="logo" src="Logo3.png" alt="please wait"/></Link>
            <Link to="/" style={{ textDecoration:'none'}}><p className="nav-link">Home</p></Link>
            <NavDropdown title="Our Menus" id="nav-dropdown">
             <NavDropdown.Item eventKey="4.1"  ><Link to="/diykits" style={{ textDecoration:'none'}}>DIY Kits</Link></NavDropdown.Item>
             <NavDropdown.Item eventKey="4.2" ><Link to="/cookedmeals"  id="item" style={{ textDecoration:'none'}}>Cooked Meals</Link></NavDropdown.Item>
            </NavDropdown>
            <Link to="/plans" style={{ textDecoration:'none'}}><p className="nav-link">Plans</p></Link>
            <Link to="/aboutus" style={{ textDecoration:'none'}}><p className="nav-link">AboutUs</p></Link>
            <Link to="/cart"  style={{ textDecoration:'none'}}><i id="cart" className="fas fa-shopping-cart"/><span class='badge badge-warning' id='lblCartCount'> {totalQty} </span></Link>
            <NavDropdown title="Account" id="nav-dropdown">
                <p className="nav-link">{`${props.logout.email}`}</p>
             <NavDropdown.Item eventKey="4.1"  >Your Details</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2"  ><Link to ="/orders"> Your Orders</Link></NavDropdown.Item>
             <NavDropdown.Item eventKey="4.3" onClick={onClick} >Logout</NavDropdown.Item>
            </NavDropdown>
            
            </nav>
            </div>
       )}

    }