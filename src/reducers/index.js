import updateBookList from './book-list-reducer'
import updateOrderList from './order-list-reducer'

const reducer = (state, action) => {
    return {
      bookList: updateBookList(state, action),
      orderList: updateOrderList(state, action)
    }
}

export default reducer