import React from 'react'
import "./Product.css"; 

function Product() {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>How to Make a Few Billion Dollars Hardcover</p>
        <p className= 'product__price'> 
            <small>$</small>
            <strong>20.99</strong>
        </p>
        <div className='product__rating'>
            
        <p>🌟</p>
        

        </div>
      </div>

      <img src='https://m.media-amazon.com/images/I/71K9SfihudL._SY342_.jpg' alt=''></img>

      <button>Add to Cart</button>
    </div>
  )
}

export default Product
