import React, { useContext, useState } from "react"
//import { ProductsContext } from './Global/ProductsContext';
import { CartContext } from './Global/CartContext';
import {db} from "./firebase"
import "./ProductDetails.css"


export const CookedProductDetails =(props) => {

    const [product , setProduct] = useState("")

   // const {products} = useContext(ProductsContext);
    const {dispatch} = useContext(CartContext) ;

     db.collection('CookedProducts').doc(`${props.match.params.id}`).get()
    .then((u)=>{

        console.log(u.data())
        setProduct( u.data())
    })
    //console.log(props.match.params.id)
    //console.log(proli)
    //var ingred =product.ProductIngred;
    //var li = ingred.split(",");


   // console.log(ingred)

        return (
           
            <div className="product-details"key={props.match.params.id}>
               <img src={product.ProductImg} alt="Loading"></img>
               <div className="product-information">
               <h1>{product.ProductName}</h1>
               <p>{product.ProductDesc}.</p>
               <h2>Price: <span>₹{product.ProductPrice}/-</span></h2>
               <button className='addcart-btn' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>ADD TO CART</button>
               </div>
            </div>
           )
}
