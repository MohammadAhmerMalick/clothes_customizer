import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './actionBoard/Home'

export default function ActionBoard() {
  return (
    <div className="action-board">
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  )
}
