
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
  cartItems: [],
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

// const updateCartItem = (book, item) => {
//   if (item) {
//     return {
//       ...item,
//       count: item.count + 1,
//       total: item.total + book.price
//     }
//   } else {
//     return {
//       id: book.id,
//       title: book.title,
//       count: 1,
//       total: book.price
//     }
//   }
// }

const updateCartItem = (book, item = {}) => {
  const {
    id = book.id,
    title = book.title,
    count = 0,
    total = 0
  } = item
  
  return {
    id,
    title,
    count: count + 1,
    total: total + book.price
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
    case 'BOOK_INCREASE_TO_CART':
      const bookIdIncrease = action.payload
      const bookPrice = state.books.find((item) => item.id === bookIdIncrease).price
      const bookIdxIncrease = state.cartItems.findIndex(({id}) => id === bookIdIncrease)
      const itemIncrease = state.cartItems[bookIdxIncrease]
      const newItemIncrease = {
        ...itemIncrease,
        count: itemIncrease.count + 1,
        total: itemIncrease.total + bookPrice
      }

      return {
        ...state,
        cartItems: [
          ...state.cartItems.slice(0, bookIdxIncrease),
          newItemIncrease,
          ...state.cartItems.slice(bookIdxIncrease + 1)
        ]
      }

    case 'BOOK_DECREASE_TO_CART':
      const bookIdDecrease = action.payload
      const bookPriceDecrease = state.books.find((item) => item.id === bookIdDecrease).price
      const bookIdxDecrease = state.cartItems.findIndex(({id}) => id === bookIdDecrease)
      const itemDecrease = state.cartItems[bookIdxDecrease]
      let newItemDecrease = {
        ...itemDecrease,
        count: itemDecrease.count - 1,
        total: itemDecrease.total - bookPriceDecrease
      }

      if (itemDecrease.count < 2) {
        newItemDecrease = {
          ...itemDecrease,
          count: 1,
          total: bookPriceDecrease
        }
      }

      return {
        ...state,
        cartItems: [
          ...state.cartItems.slice(0, bookIdxDecrease),
          newItemDecrease,
          ...state.cartItems.slice(bookIdxDecrease + 1)
        ]
      }
    case 'BOOK_DELETE_TO_CART':
      const bookIdDelete = action.payload
      const bookDeleteIdx = state.cartItems.findIndex(({id}) => id === bookIdDelete)
      console.log(bookIdDelete)
      console.log(state.cartItems)
      return {
        ...state,
        cartItems: [
          ...state.cartItems.slice(0, bookDeleteIdx),
          ...state.cartItems.slice(bookDeleteIdx + 1),
        ]
      }
    
    //   const newItem1  = {
    //     ...item,
    //     count: item.count + 1,
    //     total: item.total + price
    //   }
    //   const newItemIndex1 = state.cartItems.findIndex(({id}) => id === bookId)
    //   return {
    //     ...state,
    //     cartItems: updateCartItems(state.cartItems, newItem, newItemIndex)
    //   }
    // case 'BOOK_DECREASE_TO_CART':
      
    // case 'BOOK_DELETE_TO_CART':
      
    default:
      return state
  }
}

export default reducer