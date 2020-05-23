
const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks
  }
}

const bookRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST'
  }
}

const bookError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILTURE',
    payload: error
  }
}

const bookAddedToCart = (bookId) => {
  return {
    type: "BOOK_ADDED_TO_CART",
    payload: bookId
  }
}

const bookRemoveToCart = (bookId) => {
  return {
    type: "BOOK_REMOVE_FROM_CART",
    payload: bookId
  }
}

const allBooksRemoveToCart = (bookId) => {
  return {
    type: "ALL_BOOKS_REMOVE_FROM_CART",
    payload: bookId
  }
}

const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(bookRequested())
  bookstoreService.getBooks()
  .then((data) => {
    dispatch(booksLoaded(data))
  })
  .catch((err) => {
    dispatch(bookError(err))
  })
}

export {
  fetchBooks,
  bookAddedToCart,
  bookRemoveToCart,
  allBooksRemoveToCart
}