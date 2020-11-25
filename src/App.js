import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import Login from './routes/login.route'
import Dashboard from './routes/dashboard.route'
import PlanRoute from './routes/Plan.Route'
import Register from './routes/register.route'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super()

    this.state = {
      auth: {
        token: props.token,
      },
    }

    if (props.token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${props.token}`

    this.getTokenHeader = this.getTokenHeader.bind(this)
    this.setToken = this.setToken.bind(this)
  }

  getTokenHeader() {
    return {
      Authorization: `Bearer ${this.state.auth.token}`,
    }
  }

  setToken(token) {
    this.setState({
      auth: {
        token: token,
      },
    })

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard
              getTokenHeader={this.getTokenHeader}
              setToken={this.setToken}
            />
          </Route>
          <Route path="/dashboard">
            <Dashboard
              getTokenHeader={this.getTokenHeader}
              setToken={this.setToken}
            />
          </Route>
          {/* <Route path="/:projectId" component={PlanRoute} /> */}
          <Route path="/plan/:projectId" component={PlanRoute} />
          <Route exact path="/login">
            <Login
              getTokenHeader={this.getTokenHeader}
              setToken={this.setToken}
            />
          </Route>
          <Route path="/register">
            <Register
              getTokenHeader={this.getTokenHeader}
              setToken={this.setToken}
            />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App
