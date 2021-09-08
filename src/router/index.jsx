import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import App from '../App'

const MenuRouter = () => {
  return (
    <App>
      <Switch>
        <Route path="/" exact component={Home}></Route>
      </Switch>
    </App>
  )
}

export default MenuRouter
