const updateOrderList = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
    }
  }
  switch (action.type) {
    case 'BOOK_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1)

    case 'BOOK_REMOVE_FROM_CART':
      return updateOrder(state, action.payload, -1)

    case 'ALL_BOOKS_REMOVE_FROM_CART':
      const count = state.orderList.cartItems.find(({id}) => id === action.payload).count
      return updateOrder(state, action.payload, -count)
    
    default:
      return state.orderList
  }
}

const updateCartItem = (book, item = {}, quantity) => {
  const {
    id = book.id,
    title = book.title,
    count = 0,
    total = 0
  } = item
  
  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * book.price
  }
}

const updateCartItems = (cartItems, item, idx) => {
  if (item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1),
    ]
  }
  if (idx === -1) {
    return [
        ...cartItems,
        item
      ]
  } else {
    return [
      ...cartItems.slice(0, idx),
      item,
      ...cartItems.slice(idx + 1),
    ]
  }
}

const updateOrder = (state, bookId, quantity) => {
  const {bookList: {books}, orderList: {cartItems}} = state
  const book = books.find(({id}) => id === bookId)
  const newItemIndex = cartItems.findIndex(({id}) => id === bookId)
  const item = cartItems[newItemIndex]
  const newItem = updateCartItem(book, item, quantity)
  return {
    orderTotal: 0,
    cartItems: updateCartItems(cartItems, newItem, newItemIndex)
  }
}

export default updateOrderList