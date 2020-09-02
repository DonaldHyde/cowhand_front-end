import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

import Login from './routes/login.route'
import Dashboard from './routes/dashboard.route'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        {/* <Route path="/register">
          <Dashboard />
        </Route> */}
      </Switch>
    </BrowserRouter>
  )
}

export default App
