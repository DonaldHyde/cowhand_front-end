import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
import App from './App'
import axios from 'axios'
import { API_URL } from './env/env'

async function silentRefresh() {
  let token = ''

  // axios
  //   .post(`${API_URL}/api/v1/refresh_token`)
  //   .then((res) => {
  //     console.log('Token Refreshed!')
  //     token = res.data.token
  //   })
  //   .catch((err) => {
  //     console.log('An attempt to refresh the token failed.')
  //     console.log('err', err)
  //   })
  //   .then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <App token={token} />
    </React.StrictMode>,
    document.getElementById('root')
  )
  // })
}

silentRefresh()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
