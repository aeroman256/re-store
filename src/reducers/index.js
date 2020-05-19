
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
      id: 1,
      title: "Book 1",
      count: 2,
      total: 20
    },
    {
      id: 2,
      title: "Book 2",
      count: 3,
      total: 90
    }
  ],
  orderTotal: 110,
  loading: true,
  error: null
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
    default:
      return state
  }
}

export default reducer