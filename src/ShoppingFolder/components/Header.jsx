import React from 'react'

const Header = () => {
  return (
    <div className='headerSection'>
      <div className="left">
        <h3 className='title'>Shopping Mall</h3> 
      </div>
      <div className="center">
        <ul>
          <li>Women</li>
          <li>Men</li>
          <li>Children</li>
          <li>Beauty</li>
        </ul>
      </div>
      <div className="search">
        <input placeholder='Search' />
      </div>
      <div className="right">
        <div className='signin'>
          Signin / signup
        </div> 
        <div className="cart">
          Cart
        </div>
      </div>
    </div>
  )
}

export default Header
