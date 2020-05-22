
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

const updateItem = () => {

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
      const newItem = {
        id: book.id,
        title: book.title,
        count: 1,
        total: book.price
      }
      const newItemIndex = state.cartItems.findIndex(({id}) => id === newItem.id)
      if (newItemIndex === -1) {
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            newItem
          ]
        }
      }

      
      return {
        ...state,
        cartItems: [
          ...state.cartItems.slice(0, newItemIndex),
          {
            id: newItem.id,
            title: newItem.title,
            count: state.cartItems[newItemIndex].count + 1,
            total: state.cartItems[newItemIndex].total + newItem.total

          },
          ...state.cartItems.slice(newItemIndex + 1),
        ]
      }
    
      
    default:
      return state
  }
}

export default reducer