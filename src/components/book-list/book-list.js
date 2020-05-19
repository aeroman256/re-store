import React, { Component } from 'react'
import BookListItem from '../book-list-item'
import Spinner from '../spinner'
import { connect } from 'react-redux'
import { withBookstoreService } from '../hoc'
import { fetchBooks } from '../../actions'
import { compose } from '../../utils'

import './book-list.css'
import ErrorIndicator from '../error-indicator/error-indicator'

class BookList extends Component {

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
    const { books, loading, error } = this.props
    if (loading) {
      return <Spinner />
    }
    if (error) {
      return <ErrorIndicator />
    }

    return (
      <ul className="book-list">
        {books.map((book) => {
          return (
            <li key={book.id}><BookListItem book={book} /></li>
          )
        })}
      </ul>
    )
  }
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
    fetchBooks: fetchBooks(bookstoreService, dispatch)
  }
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList)
