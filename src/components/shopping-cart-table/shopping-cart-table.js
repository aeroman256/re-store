import React from 'react'
import { connect } from 'react-redux'
import {
  bookIncreaseToCart,
  bookDecreaseToCart,
  bookDeleteToCart
} from '../../actions'

import './shopping-cart-table.css'

const ShoppingCartTable = ({items, total, deCrease, inCrease, onDelete}) => {
  const renderRow = (item, idx) => {
    const {id, title, count, total} = item
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total}</td>
        <td>
          
          <button className="btn btn-outline-success btn-sm float-left"
            onClick={() => inCrease(id)}>
            <i className="fa fa-plus-circle" />
          </button>
          <button className="btn btn-outline-warning btn-sm float-left"
            onClick={() => deCrease(id)}>
            <i className="fa fa-minus-circle" />
          </button>
          <button className="btn btn-outline-danger btn-sm float-left"
            onClick={() => onDelete(id)}>
            <i className="fa fa-trash-o" />
          </button>
        </td>
      </tr>
    )
  }
  return (
    <div className="shopping-cart-table">
      <h2>You Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map(renderRow)
          }   
        </tbody>
      </table>
      <div className="total">
        Total: ${total}
      </div>
    </div>
  )
}

const mapStateToProps = ({cartItems, orderTotal}) => {
  return {
    items: cartItems, 
    total: orderTotal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    inCrease: (id) => {
      dispatch(bookIncreaseToCart(id))
    },
    deCrease: (id) => {
      dispatch(bookDecreaseToCart(id))
    },
    onDelete: (id) => {
      dispatch(bookDeleteToCart(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable)