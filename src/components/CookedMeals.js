import React, { useContext } from 'react'
import { CookedProductsContext } from './Global/CookedProductsContext'
import { CartContext } from './Global/CartContext'
import {Link} from 'react-router-dom'
import "./DIY.css"

export const CookedMeals = () => {

    const { products } = useContext(CookedProductsContext);

    const { dispatch } = useContext(CartContext);

    return (
        <>
            {products.length !== 0 && <h1>Cooked Meals</h1>}
            <div className='products-container'>
                {products.length === 0 && <div>slow internet...no products to display</div>}
                {products.map(product => (
                    <div className='product-card' key={product.ProductID}>
                        <Link   key={product.ProductID} to={`/cookedproductdetails/${product.ProductID}`} style={{textDecoration:"none"}}><div className='product-img'>
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