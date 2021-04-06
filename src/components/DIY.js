import React, { useContext } from 'react'
import { ProductsContext } from './Global/ProductsContext'
import { CartContext } from './Global/CartContext'
import {Link} from 'react-router-dom'
import "./DIY.css"

export const DIY = (props) => {

    const { products } = useContext(ProductsContext);

    const { dispatch } = useContext(CartContext);

    return (
        <>
            {products.length !== 0 && <h1>DIY Products - Cook Yourself With the Ingredients</h1>}
            <div className='products-container'>
                {products.length === 0 && <div>slow internet...no products to display</div>}
                {products.map(product => (
                   <div className='product-card' >
                         <Link   key={product.ProductID} to={`/productdetails/${product.ProductID}`} style={{textDecoration:"none"}}><div className='product-img'>
                            <img src={product.ProductImg} alt="not found" />
                        </div>
                        <div className='product-name'>
                            {product.ProductName}
                        </div>
                        <div className='product-price'>
                            Rs {product.ProductPrice}.00
                    </div></Link>
                        <button className='addcart-btn' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>ADD TO CART</button>
                    </div>
                ))}
            </div>
        </>
    )
}