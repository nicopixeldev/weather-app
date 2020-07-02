import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../Home'

class App extends Component {

  render() {
    return (
      <section className="app">
        <Switch>
            <Route path="/:query" render={() => <Home />} />
            <Route path="/" render={() => <Home />} />
        </Switch>
      </section>
    )
  }
}

export default App
