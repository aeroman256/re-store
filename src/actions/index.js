
const booksLoaded = (newBooks) => {
  return {
    type: 'BOOKS_LOADED',
    payload: newBooks
  }
}

const bookRequested = () => {
  return {
    type: 'BOOKS_REQUESTED'
  }
}

const bookError = (error) => {
  return {
    type: 'BOOKS_ERROR',
    payload: error
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
  fetchBooks
}