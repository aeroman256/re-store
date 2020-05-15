import React, {Component} from 'react'
import ErrorBoundry from '../error-boundry'
import { BookStoreProvider } from '../bookstore-services-context'
import BookstoreServices from '../../services/bookstore-service'
import Restore from '../pages/restore'
import Spinner from '../spinner'



export default class App extends Component   {
  state = {
    booksServices: new BookstoreServices(),
    loading: true
  }
  componentDidMount(){
    this.setState({
      loading: false
    })
  }

  render() {
    const { loading } = this.state
    if (loading){
      return <Spinner />
    }
    return (
      <ErrorBoundry>
        <BookStoreProvider booksServices={this.state.booksServices}>
          <h1>Hello App</h1>
          <Restore />
          <Spinner />
        </BookStoreProvider>
      </ErrorBoundry>
    )
  }
}
