import React from 'react'
import { Link } from 'react-router-dom'

import ProjectNav from './ProjectNav.component'

// import Context from '../Store'

import axios from 'axios'
// import { API_URL } from '../env/env'
import { projects } from '../dummy'

import '../static/css/Navbar.component.css'
import logo_100 from '../static/images/cowhand_logo_100.png'

class Navbar extends React.Component {
  constructor() {
    super()

    this.state = {
      projects: projects,
    }

    this.handleSelectChange = this.handleSelectChange.bind(this)
  }

  handleSelectChange(e) {
    const projectId = e.currentTarget.attributes.id.value
  }

  // componentDidMount() {
  //   this.setState({
  //     projects: projects
  //   })
  // }

  render() {
    const username = 'bind_operator'

    return (
      <div className="navbar">
        <div className="navbar__header">
          <img className="navbar__logo" align="top" src={logo_100}></img>
          <h1 className="navbar__title">Cowhand.io</h1>
        </div>
        <div className="navbar__body">
          <nav className="navbar__nav">
            <ul className="navbar__list">
              <li className="navbar__item">
                <ProjectNav />
              </li>
              <li className="navbar__item">
                <Link className="navbar__link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="navbar__item">
                <button className="navbar__button">Create</button>
              </li>
            </ul>
          </nav>
          <div className="navbar__user">{`Howdy, ${username}!`}</div>
        </div>
      </div>
    )
  }
}

export default Navbar
