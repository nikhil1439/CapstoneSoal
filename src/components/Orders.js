import { Link } from "react-router-dom"
import React from "react"
import "./Orders.css"
//import { CartContext } from './Global/CartContext'


export const Orders =(props)=> {

    //var totalprice = 0;

    var prod= localStorage.getItem(props.logout.email)
    var prods = JSON.parse(prod)
console.log(prods)
        return(
            <>
            {prods !== null && <h1>Order History</h1>}
                <div className='order-container'>
                    {
                        prods.length === 0 && <>
                            <div>No items in your cart </div>
                            <div><Link to="/">Return to Home page</Link></div>
                        </>
                    }

            {prods.map(product =>(
            
                <div className="order-card">
                <div className="order-img">
                <img src={product.ProductImg} alt ="img"/>
                </div>
                <div className="order-name">
                {product.ProductName}
                </div>
                <div className='order-price-orignal'>Rs {product.ProductPrice}.00</div>
                <div className='quantity'>Qty = {product.qty}</div>
            </div>
           
           
            ))}
             </div>
             </>
        )
      
}

