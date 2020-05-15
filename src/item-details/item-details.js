import React from 'react'

const ItemDetails = (props) => {
  const { name, author, price} = props
  return (
    <div>
      <span>{name}</span>
      <span>{author}</span>
      <span>{price}</span>
    </div>
  )
}

export default ItemDetails

// {
//   id: 1,
//   name: "Site Reliability Engineering",
//   author: "Michael T. Nygard",
//   price: "34"
// },