import React from 'react'
import { Link } from 'react-router-dom'

import '../static/css/ProjectNav.component.css'

import { projects } from '../dummy'

class ProjectNav extends React.Component {
  constructor() {
    super()

    this.state = {
      projects: [],
      showList: false,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    // fetch projects list
    const fetchedProjects = projects

    this.setState({
      projects: fetchedProjects,
    })
  }

  handleClick(e) {
    this.setState({
      showList: !this.state.showList,
    })
  }

  render() {
    return (
      <div className="projects__select">
        <button onClick={this.handleClick} className="projects__button">
          Projects
        </button>
        <nav
          className={`projects__nav ${
            this.state.showList ? '' : 'projects__nav--hidden'
          }`}
        >
          <ul className="projects__list">
            {this.state.projects.length &&
              this.state.projects.map((project) => (
                <li key={project._id} className="projects__item">
                  <Link className="projects__link" to={`/plan/${project._id}`}>
                    {project.name}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    )
  }
}

export default ProjectNav
