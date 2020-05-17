import React from 'react'
import './shop-header.css'

const ShopHeader = ({numItems, total}) => {
  return (
    <header className="shop-header row">
      <a href="#" className="logo text-dark">BookStore</a>
      <a className="shopping-cart">
        <i className="cart-icon fa fa-shopping-cart"></i>
        {numItems} items (${total}) 
      </a>
    </header>
  )
}

export default ShopHeader