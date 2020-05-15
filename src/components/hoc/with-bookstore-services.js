import React from 'react'
import { BookstoreServiceConsumer } from '../bookstore-services-context'

const withBookstoreService = (mapMethodsToProps) => (Wrapped) => {
  return (props) => {  
    return (
      <BookstoreServiceConsumer>
        {
          (bookstoreService) => {
            const serviceProps = mapMethodsToProps(bookstoreService)
            return(
              <Wrapped {...props} {...serviceProps} />
            )
          }
        }
      </BookstoreServiceConsumer>
    )
  }
}

export default withBookstoreService