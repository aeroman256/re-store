import React, { Component } from 'react'
import BookListItem from '../book-list-item'
import { connect } from 'react-redux'
import { withBookstoreService } from '../hoc'
import { booksLoaded } from '../../actions'
import { compose } from '../../utils'

import './book-list.css'

class BookList extends Component {

  componentDidMount() {
    //receive data
    const data = this.props.bookstoreService.getBooks()
    console.log(data)
    //dispatch action to store
    this.props.booksLoaded(data)
  }

  render() {
    const { books } = this.props
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

const mapStateToProps = ({books}) => {
  return {
    books
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
  booksLoaded
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList)
