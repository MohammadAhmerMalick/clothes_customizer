import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AddArt from './actionBoard/AddArt'
import Home from './actionBoard/Home'

export default function ActionBoard() {
  return (
    <div className="action-board">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/addArt" component={AddArt} />
      </Switch>
    </div>
  )
}
