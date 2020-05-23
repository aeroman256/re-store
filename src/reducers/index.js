
const initialState = {
  books: [],
  cartItems: [],
  orderTotal: 110,
  loading: true,
  error: null
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
  const {books, cartItems} = state
  const book = books.find(({id}) => id === bookId)
  const newItemIndex = cartItems.findIndex(({id}) => id === bookId)
  const item = cartItems[newItemIndex]
  const newItem = updateCartItem(book, item, quantity)
  return {
    ...state,
    cartItems: updateCartItems(cartItems, newItem, newItemIndex)
  }
}

const reducer = (state=initialState, action) => {
  switch(action.type){
    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      }
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state,
        books: [],
        loading: true,
        error: null
      }
    case 'FETCH_BOOKS_FAILTURE':
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      }
    case 'BOOK_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1)

    case 'BOOK_REMOVE_FROM_CART':
      return updateOrder(state, action.payload, -1)

    case 'ALL_BOOKS_REMOVE_FROM_CART':
      const count = state.cartItems.find(({id}) => id === action.payload).count
      return updateOrder(state, action.payload, -count)

    default:
      return state
  }
}

export default reducer