
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
  loading: true,
  error: null
}

const reducer = (state=initialState, action) => {
  switch(action.type){
    case 'BOOKS_LOADED':
      return {
        books: action.payload,
        loading: false,
        error: null
      }
    case 'BOOKS_REQUESTED':
      return {
        books: [],
        loading: true,
        error: null
      }
    case 'BOOKS_ERROR':
      return {
        books: [],
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default reducer