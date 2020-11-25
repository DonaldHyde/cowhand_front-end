import React from 'react'
import { Link } from 'react-router-dom'

import WorkImage from './work.icon'
import WatchImage from './watch.icon'
import PlanImage from './plan.icon'

// import Context from '../Store'

import axios from 'axios'
import { API_URL } from '../env/env'
import { projects } from '../dummy'

import '../static/css/sidebar.component.css'
import logo_100 from '../static/images/cowhand_logo_100.png'

function Sidebar(props) {
  const { match } = props.routerProps
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <img className="sidebar__logo" align="top" src={logo_100}></img>
        <div className="sidebar__title-container">
          <h1 className="sidebar__title">Cowhand.io</h1>
          <h3 className="sidebar__subtitle">Giddy up!</h3>
        </div>
      </div>
      <div className="sidebar__body">
        <ul className="sidebar__list">
          <li>
            <Link
              className="sidebar__link"
              to={`/work/${match.params.projectId}`}
            >
              <WorkImage className="sidebar__icon" />
              Work
            </Link>
          </li>
          <li>
            <Link
              className="sidebar__link"
              to={`/plan/${match.params.projectId}`}
            >
              <PlanImage className="sidebar__icon" />
              Plan
            </Link>
          </li>
          <li>
            <Link
              className="sidebar__link"
              to={`/watch/${match.params.projectId}`}
            >
              <WatchImage className="sidebar__icon" />
              Watch
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
