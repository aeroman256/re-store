import React, { Component } from 'react'
import BookListItem from '../book-list-item'
import Spinner from '../spinner'
import { connect } from 'react-redux'
import { withBookstoreService } from '../hoc'
import { booksLoaded, bookRequested } from '../../actions'
import { compose } from '../../utils'

import './book-list.css'

class BookList extends Component {

  componentDidMount() {
    const { bookstoreService, booksLoaded, bookRequested} = this.props

    bookRequested()
    bookstoreService.getBooks()
      .then((data) => {
        booksLoaded(data)
      })
    //receive data
    // const data = this.props.bookstoreService.getBooks()
    // console.log(data)
    // //dispatch action to store
    // this.props.booksLoaded(data)
  }

  render() {
    const { books, loaded } = this.props
    if (loaded) {
      return <Spinner />
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

const mapStateToProps = ({books, loaded}) => {
  return {
    books,
    loaded
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

const mapDispatchToProps = {
  booksLoaded,
  bookRequested
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList)
