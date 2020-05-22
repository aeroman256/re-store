import React, { Component } from 'react'
import BookListItem from '../book-list-item'
import Spinner from '../spinner'
import { connect } from 'react-redux'
import { withBookstoreService } from '../hoc'
import { fetchBooks, bookAddedToCart } from '../../actions'
import { compose } from '../../utils'

import './book-list.css'
import ErrorIndicator from '../error-indicator/error-indicator'

class BookListContainer extends Component {

  componentDidMount() {
    const { fetchBooks } = this.props
    fetchBooks()
    
    //receive data
    // const data = this.props.bookstoreService.getBooks()
    // console.log(data)
    // //dispatch action to store
    // this.props.booksLoaded(data)
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props
    if (loading) {
      return <Spinner />
    }
    if (error) {
      console.log(error)
      return <ErrorIndicator />
    }

    return <BookList books={books} onAddedToCart={onAddedToCart}/>
  }
}

const BookList = ({books, onAddedToCart}) => {
  return (
      <ul className="book-list">
        {books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem 
                book={book}
                onAddedToCart={() => onAddedToCart(book.id)}/>
            </li>
          )
        })}
      </ul>
  )
}

const mapStateToProps = ({books, loading, error}) => {
  return {
    books,
    loading,
    error
  }
}

// const mapDispatchToProps = (dispatch) =>{
//   return { 
//       booksLoaded: (newBooks) => {
//         dispatch (booksLoaded(newBooks))
//     }
//   }
// }

// const mapDispatchToProps = (dispatch) =>{
//   return bindActionCreators({
//     booksLoaded
//   }, dispatch)
// }

// const mapDispatchToProps = {
//   booksLoaded,
//   bookRequested,
//   bookError
// }

const mapDispatchToProps = (dispatch, ownProps) => {
  const {bookstoreService} = ownProps
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToCart: (idBook) => {
      dispatch(bookAddedToCart(idBook))
    }
  }
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)
