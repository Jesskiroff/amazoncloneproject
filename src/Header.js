import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className='header'>
      <img className='header__logo' src='https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-600x400.png.webp' alt='Amazon Logo'/>
      <div 
      className='header__search'>
          <input 
          className='header__searchInput' 
          type='text'/>
          {/* Logo */}
      </div>
      <div className='header__nav'>
        <div className='header__option'>
          <span className='header_optionLineOne'>Hello Guest</span>
          <span className='header_optionLineTwo'>Sign In</span>

        </div>

        <div className='header__option'>
          <span className='header_optionLineOne'>Returns</span>
          <span className='header_optionLineTwo'>& Orders</span>

        </div>

        <div className='header__option'>
          <span className='header_optionLineOne'>Your</span>
          <span className='header_optionLineTwo'>Prime</span>

        </div>
      </div>
    </div>
    
  )
}

export default Header
