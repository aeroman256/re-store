
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

export {
  booksLoaded,
  bookRequested,
  bookError
}