import React from 'react'
import { withRouter } from 'react-router-dom'

import axios from 'axios'
import { API_URL } from '../env/env'

import '../static/css/login.css'
import logo_100 from '../static/images/cowhand_logo_100.png'

// const history = useHistory()

class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
    }

    this.onChange = this.onChange.bind(this)
    this.submitLogin = this.submitLogin.bind(this)
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  submitLogin(e) {
    axios
      .post(`${API_URL}/api/v1/login`, {
        email: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        console.log('Login Success!')
        this.props.setToken(res.data.token)
        // axios.defaults.headers.common[
        //   'Authorization'
        // ] = `Bearer ${res.data.token}`
        console.log('Redirecting to dashboard!')
        this.props.history.push('/dashboard')
      })
      .catch((err) => {
        console.error(err)
      })

    // TMP
    // return this.props.history.push('/dashboard')
  }

  componentDidMount() {
    // console.log(this.props.getTokenHeader())
    // axios.get(`${API_URL}/api/v1/login/status`).then((res) => {
    //   console.log(res)
    //   if (res.data.sessionActive) return this.props.history.push('/dashboard')
    // })
  }

  render() {
    return (
      <div className="login-view">
        <div className="title-container">
          <img src={logo_100}></img>
          <h1>Get Back in the Saddle</h1>
          <p>(Login)</p>
        </div>
        <div className="form-container">
          <div className="input-element">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" onChange={this.onChange} />
          </div>
          <div className="input-element">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={this.onChange} />
          </div>
          <button onClick={this.submitLogin}>Giddy Up</button>
        </div>
      </div>
    )
  }
}

export default withRouter(Login)
