import React from 'react'
// import { useHistory } from 'react-router-dom'

import axios from 'axios'

// const history = useHistory()

class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
    }

    this.onChange.bind(this)
    this.submitLogin.bind(this)
  }

  onChange(e) {
    console.log({
      [e.target.name]: e.target.value,
    })
    // this.setState({
    //   [e.target.name]: e.target.value
    // })
  }

  submitLogin(e) {
    axios
      .post('/api/v1/login', {
        email: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        this.props.history.push('/dashboard')
      })
      .catch((err) => {
        console.error(err)
      })
  }

  render() {
    return (
      <div className="login-view">
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={this.onChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={this.onChange}
        />
        <button onClick={this.submitLogin}>Login</button>
      </div>
    )
  }
}

export default Login
