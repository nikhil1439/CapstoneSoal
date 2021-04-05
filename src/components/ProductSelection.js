import React, { useContext } from 'react'
import { PlanProductsContext } from './Global/PlanProductsContext'
import { CartContext } from './Global/CartContext'
import {Link} from 'react-router-dom'
import "./DIY.css"

export const ProductSelection = () => {

    const { products,recipie} = useContext(PlanProductsContext);

    const { cart,dispatch } = useContext(CartContext);

    console.log(cart.totalQty)

    return (

        <>
            
            {products.length !== 0 && <h1>DIY Products - Cook Yourself With the Ingredients</h1> 
            && <h1>Please add {`${recipie}`} items to your Cart</h1>}
            <div className='products-container'>
                {products.length === 0 && <div>slow internet...no products to display</div>}
                {products.map(product => (
                   <div className='product-card' key={product.ProductID}>
                         <Link   key={product.ProductID} to={`/planproductdetails/${product.ProductID}`} style={{textDecoration:"none"}}><div className='product-img'>
                            <img src={product.ProductImg} alt="not found" />
                        </div>
                        <div className='product-name'>
                            {product.ProductName}
                        </div>
                        <div className='product-Type'>
                           {product.ProductType}
                    </div></Link>
                        <button className='addcart-btn' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>ADD TO CART</button>
                    </div>
                ))}
            </div>
        </>
    )
}