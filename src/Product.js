import React from 'react'
import "./Product.css"; 

function Product({id, title, image, price, rating}) {

    const [state, dispatch] = useStateValue();
    const addToBsket= ()=> {
      //dispatch the item into the data layer

    }
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className= 'product__price'> 
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className='product__rating'>
            {Array(rating).fill().map((_,i)=>(
                <p>🌟</p>
            ))}
    
        {/* <img src={image} alt=''/> */}

        </div>
      </div>

    <img src={image} alt=''></img>

      <button onclick={addToBsket}>Add to Cart</button>
    </div>
  )
}

export default Product
