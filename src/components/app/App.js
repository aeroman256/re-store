import React from 'react'
import { Route, Switch } from 'react-router-dom'


import { HomePage, CardPage } from '../pages'
import ShopHeader from '../shop-header'
import ShoppingCartTable from '../shopping-cart-table'


const App = () => {
  return (
    <main role="main" className="container">
        <ShopHeader numItems={5} total={250}/>
        <Switch>
          <Route path='/' component={HomePage} exact/>
          <Route path='/card' component={CardPage} />
        </Switch>
        <ShoppingCartTable />
    </main>
  )
}

export default App