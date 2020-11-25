import React from 'react'
import { withRouter } from 'react-router-dom'

import { parse } from 'query-string'

import axios from 'axios'
import { API_URL } from '../env/env'

import { sprints } from '../dummy'

import '../static/css/main.css'

import SprintList from './SprintList.Component'
import BacklogList from './BacklogList.Component'

class BacklogView extends React.Component {
  constructor(props) {
    super()

    this.state = {
      sprints: [],
      selectedTicket: '',
    }
  }

  componentDidMount() {
    const { location } = this.props.routerProps
    const queryParams = new URLSearchParams(location.search)

    const selectedTicket = queryParams.get('selectedTicket')

    const fetchedSprints = sprints.filter(
      (sprint) => sprint.projectId === this.props.match.params.projectId
    )

    this.setState({
      sprints: fetchedSprints,
      selectedTicket,
    })
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props.routerProps

    if (
      this.props.routerProps.match.params.projectId !==
        prevProps.routerProps.match.params.projectId ||
      location.search !== prevProps.routerProps.location.search
    ) {
      const queryParams = new URLSearchParams(location.search)
      const selectedTicket = queryParams.get('selectedTicket')

      const fetchedSprints = sprints.filter(
        (sprint) => sprint.projectId === this.props.match.params.projectId
      )

      this.setState({
        sprints: fetchedSprints,
        selectedTicket,
      })
    }
  }

  render() {
    return (
      <div
        className={`main ${
          this.state.selectedTicket ? 'main--has-ticket' : ''
        }`}
      >
        <div className="main__body">
          {this.state.sprints.length
            ? this.state.sprints.map((sprint, i) => (
                <SprintList
                  key={i}
                  routerProps={this.props.routerProps}
                  sprint={sprint}
                />
              ))
            : ''}
          <BacklogList routerProps={this.props.routerProps} />
        </div>
      </div>
    )
  }
}

export default withRouter(BacklogView)
