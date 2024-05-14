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
      <Product
        title= 'Cleverfy Shower Steamers Aromatherapy - Variety Pack of 6 Shower Bombs with Essential Oils. Personal Care and Relaxation Birthday Gifts for Women and Men. Purple Set' 
        price={14.99} 
        image='https://m.media-amazon.com/images/I/81ZQ0Zu89OL._AC_SY450_.jpg' alt='' 
        rating={4}
        />
        <Product
        title= 'Lipper International Acacia Wave Serving Bowl for Fruits or Salads, Large, 12" Diameter x 7" Height, Single Bowl & Acacia Oblong Salad Servers, 12" Long, One Pair' 
        price={49.96} 
        image='https://m.media-amazon.com/images/I/417zhCypymL._AC_SY450_.jpg' alt='' 
        rating={4}
        />
        
      </div>

      <div classname="home__row">
        <Product
        title= 'How to Make a Few Billion Dollars Hardcover' 
        price={29.99} 
        image='https://m.media-amazon.com/images/I/71K9SfihudL._SY342_.jpg' alt='' 
        rating={5}
        />
        <Product
        title= 'Nextmug - Temperature-Controlled, Self-Heating Coffee Mug (Black - 14 oz.)' 
        price={99.95} 
        image='https://m.media-amazon.com/images/I/71D51fALypL.__AC_SX300_SY300_QL70_FMwebp_.jpg' alt='' 
        rating={5}
        />
      </div>

      <div classname="home__row">
      <Product
        title= 'Amazon Fire 7 Kids tablet, ages 3-7. Top-selling 7" kids tablet on Amazon - 2022 | ad-free content with parental controls included, 10-hr battery, 16 GB, Purple' 
        price={69.99} 
        image='https://m.media-amazon.com/images/I/710lki-m62L._AC_SL1500_.jpg' alt='' 
        rating={5}
        />
      </div>

    </div>
    </div>

  )
}

export default Home
