import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { withBookstoreService } from '../hoc'

import { HomePage, CardPage } from '../pages'



const App = ({ bookstoreService }) => {
  return (
    <div>
        <h1>Hello App</h1>
        <header>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/card'>Card</Link>
            </li>
          </ul>
        </header>
        <Switch>
          <Route path='/' component={HomePage} exact/>
          <Route path='/card' component={CardPage} />
        </Switch>
    </div>
  )
}

export default withBookstoreService()(App)