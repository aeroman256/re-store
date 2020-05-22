
const initialState = {
  books: [
    // {
    //   id: 1,
    //   title: "Site Reliability Engineering",
    //   author: "Michael T. Nygard",
    //   price: "34"
    // },
    // {
    //   id: 2,
    //   title: "Site Reliability Engineering",
    //   author: "Michael T. Nygard",
    //   price: "34"
    // }
  ],
  cartItems: [
    {
      id: 1000,
      title: "Book 1",
      count: 2,
      total: 20
    },
    {
      id: 1002,
      title: "Book 2",
      count: 3,
      total: 90
    }
  ],
  orderTotal: 110,
  loading: true,
  error: null
}

const updateCartItems = (cartItems, item, idx) => {
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

const updateCartItem = (book, item) => {
  if (item) {
    return {
      ...item,
      count: item.count + 1,
      total: item.total + book.price
    }
  } else {
    return {
      id: book.id,
      title: book.title,
      count: 1,
      total: book.price
    }
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
      const bookId = action.payload
      const book = state.books.find((item) => item.id === bookId)
      const newItemIndex = state.cartItems.findIndex(({id}) => id === bookId)
      const item = state.cartItems[newItemIndex]
      const newItem = updateCartItem(book, item)
      return {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, newItemIndex)
      }
    default:
      return state
  }
}

export default reducer