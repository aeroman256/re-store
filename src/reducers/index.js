
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
  ]
}

const reducer = (state=initialState, action) => {
  switch(action.type){
    case 'BOOKS_LOADED':
      return {
        books: action.payload
      }
    default:
      return state
  }
}

export default reducer