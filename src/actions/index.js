
const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_LOADED',
    payload: newBooks
  }
}

const bookRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUESTED'
  }
}

const bookError = (error) => {
  return {
    type: 'FETCH_BOOKS_ERROR',
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