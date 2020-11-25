import React from 'react'
// import axios from 'axios'
// import { API_URL } from '../env/env'

// import Store from '../Store'

import Navbar from '../components/Navbar.Component'
import Sidebar from '../components/Sidebar.Component'
import BacklogView from '../components/BacklogView.Component'
import EditorView from '../components/Editor.Component'

import { projects, sprints, tickets } from '../dummy'

// import '../static/css/dashboard.css'

class Dashboard extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        projects: {
          projects: [],
          selected: {},
        },
        sprints: {
          sprints: [],
          selected: {},
        },
        tickets: {
          tickets: [],
          selected: {},
        },
      },
      app: {
        sidebar: {
          hidden: false,
        },
        editor: {
          hidden: true,
        },
      },
    }

    this.setApplicationState = this.setApplicationState.bind(this)
    this.clearTicket = this.clearTicket.bind(this)
  }

  componentDidMount() {
    // axios
    //   .get(`${API_URL}/api/v1/projects`)
    //   .then((res) => {
    //     console.log(res.data.projects)
    //     this.setState({
    //       projects: res.data.projects,
    //     })
    //   })
    //   .catch((err) => {
    //     // reset state, clear tokens, etc.
    //     return this.props.history.push('/login')
    //   })

    // HACK - skipping actual calls to the server for testing
    this.setState({
      data: {
        projects: {
          ...this.state.data.projects,
          projects,
        },
        sprints: {
          ...this.state.data.sprints,
          sprints,
        },
        tickets: {
          ...this.state.data.tickets,
          tickets,
        },
      },
    })
  }

  setApplicationState(data) {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        ...data,
      },
    })
  }

  clearTicket() {
    const tickets = {
      ...this.state.data.tickets,
      selected: {},
    }

    this.setApplicationState({
      tickets,
    })
  }

  render() {
    return (
      <>
        <Navbar />
        {/* <Sidebar
          projects={this.state.data.projects}
          setApplicationState={this.setApplicationState}
          clearTicket={this.clearTicket}
        />
        <MainView
          project={this.state.data.projects.selected}
          sprints={this.state.data.sprints}
          tickets={this.state.data.tickets}
          setApplicationState={this.setApplicationState}
        />
        <EditorView
          ticket={this.state.data.tickets.selected}
          clearTicket={this.clearTicket}
        /> */}
      </>
    )
  }
}

export default Dashboard
