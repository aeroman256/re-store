import React from 'react'
import { BookstoreServiceConsumer } from '../bookstore-services-context'

const withBookstoreService = (mapMethodsToProps) => (Wrapped) => {
  return (props) => {  
    return (
      <BookstoreServiceConsumer>
        {
          (bookstoreService) => {
            return(
              <Wrapped {...props} bookstoreService={bookstoreService} />
            )
          }
        }
      </BookstoreServiceConsumer>
    )
  }
}

export default withBookstoreService