import React from "react"
import { Route,BrowserRouter } from 'react-router-dom';
import './App.css';
import {Navigation} from "./components/Navigation"
import Signin from "./components/Signin"
import Home from "./components/Home"
import Signup from "./components/Signup"
import Fire from "./components/firebase"
import Plans from "./components/Plans"
//import {db,auth} from "./components/firebase"
//import Products from "./components/products/index.js"
//import { productData} from './components/products/data';
import 'bootstrap/dist/css/bootstrap.min.css';
//import MenuAppBar from "./components/piss";
import { AddProducts } from './components/AddProducts/AddProducts';
import { AddCookedProducts } from './components/AddProducts/AddCookedProducts';
import { DIY } from './components/DIY';
import { ProductsContextProvider } from './components/Global/ProductsContext'
import { CartContextProvider } from './components/Global/CartContext'
import { Cart } from './components/Cart';
import { CookedMeals } from './components/CookedMeals';
import { CookedProductsContextProvider } from "./components/Global/CookedProductsContext";
import { Cashout } from './components/Cashout';
import { ProductDetails } from './components/ProductDetails';
import { CookedProductDetails } from './components/CookedProductDetails';
import { AddPlansProducts } from './components/AddProducts/AddPlansProducts';
import { PlanProductsContextProvider } from "./components/Global/PlanProductsContext";
import { ProductSelection } from './components/ProductSelection';
import { PlanProductDetails } from './components/PlanProductDetails';
import { Orders } from './components/Orders';
import  AboutUs  from './components/AboutUs';




class App extends React.Component {
  constructor(props){
    super(props);
  this.state ={
    user: "",
    type:"",
    order:[]
  }
  this.authListener = this.authListener.bind(this);
}

setType = (type)=>{
  this.setState({type})
}

setOrder = (order) =>{
  this.setState({order})
}


componentDidMount() {
  this.authListener();
}

authListener() {
  Fire.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ user });
    } else {
      this.setState({ user: "" });
    }
  })
}

  
render(){
  console.log(typeof(this.state.order))
  return (
    
      <ProductsContextProvider>
      <PlanProductsContextProvider >
      <CookedProductsContextProvider>
      <CartContextProvider>
       <div className="App">
      <BrowserRouter>
     
      <Navigation logout={this.state.user} />
     
      <Route exact path = "/" render={()=>{return <Home logout={this.state.user} />}}/>
      <Route exact path = "/login" render={()=>{return <Signin logout={this.state.user}/>}}/> 
      <Route exact path="/register" render={()=>{return <Signup/>}}/>
      <Route exact path="/cookedmeals" render={()=>{return <CookedMeals/>}}/>
      <Route exact path="/diykits" render={()=>{return <DIY Type={this.state.type}/>}}/>
      <Route exact path="/productselect" render={()=>{return <ProductSelection />}}/>
      <Route exact path="/addproducts" render={()=>{return <AddProducts/>}}/>
      <Route exact path="/addcookedproducts" render={()=>{return <AddCookedProducts/>}}/>
      <Route exact path="/addplansproducts" render={()=>{return <AddPlansProducts/>}}/>
      <Route exact path="/cart" render={()=>{return <Cart logout={this.state.user} setOrder={this.setOrder}/> }}/>
      <Route exact path="/cashout" render={()=>{return <Cashout logout={this.state.user}  order={this.state.order}/> }}/>
      <Route exact path="/productdetails/:id" component={ProductDetails}/>
      <Route exact path="/cookedproductdetails/:id" component={CookedProductDetails}/>
      <Route exact path="/planproductdetails/:id" component={PlanProductDetails}/>
      <Route exact path="/plans" render={()=>{return <Plans/>}}/>
      <Route exact path="/orders" render={()=>{return <Orders order={this.state.order}  logout={this.state.user}/>}}/>
      <Route exact path="/aboutus" render={()=>{return <AboutUs/>}}/>


      </BrowserRouter>
      </div>
      </CartContextProvider>
      </CookedProductsContextProvider>
      </PlanProductsContextProvider>
      </ProductsContextProvider>
    
  )};
}

export default App;
