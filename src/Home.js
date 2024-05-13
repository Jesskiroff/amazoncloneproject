import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
            className='home__image'
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
        />
        

      <div classname="home__row">
        
        
      </div>

      <div classname="home__row">
        <Product
        title= 'How to Make a Few Billion Dollars Hardcover' 
        price={29.99} 
        image='https://m.media-amazon.com/images/I/71K9SfihudL._SY342_.jpg' alt='' 
        rating={5}
        />
        
      </div>

      <div classname="home__row">
        {/* Product */}
      </div>

    </div>
    </div>

  )
}

export default Home
