import React from 'react'
import "./Product.css"; 

function Product() {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>My first product</p>
        <p className= 'product__price'> 
            <small>$</small>
            <strong>19.99</strong>
        </p>
        <div className='product__rating'>
            
        <p>🌟</p>
        <p>🌟</p>
        <p>🌟</p>

        </div>
      </div>

      <img src='' alt=''></img>
    </div>
  )
}

export default Product
