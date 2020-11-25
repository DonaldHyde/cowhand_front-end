import React from 'react'
import { Link } from 'react-router-dom'

// import axios from 'axios'

// import { API_URL } from '../env/env'

import { tickets } from '../dummy'

import '../static/css/SprintList.component.css'

const STATUS_ENUM = {
  'To Do': 'todo',
  'In Progress': 'in-progress',
  Completed: 'completed',
}

class BacklogList extends React.Component {
  constructor(props) {
    super()

    this.state = {
      tickets: [],
    }

    // console.log(props.match)

    // this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    const fetchedTickets = tickets.filter((ticket) => !ticket.sprintId)

    this.setState({
      tickets: fetchedTickets,
    })
  }

  render() {
    const { location, match } = this.props.routerProps
    const queryParams = new URLSearchParams(
      this.props.routerProps.location.search
    )

    return (
      <ul className="sprint">
        <li className="sprint__header">
          <h3 className="sprint__title">Backlog</h3>
        </li>
        <li className="sprint__body">
          <ul>
            {this.state.tickets.map((ticket, i) => {
              return (
                !ticket.sprintId &&
                match.params.projectId === ticket.projectId && (
                  <li
                    className={
                      queryParams.get('selectedTicket') === ticket._id
                        ? 'ticket ticket--selected'
                        : 'ticket'
                    }
                    id={ticket._id}
                    key={i}
                    onClick={this.handleClick}
                  >
                    <Link
                      className="ticket__link"
                      to={`/${match.params.projectId}?selectedTicket=${ticket._id}`}
                    >
                      <div className="ticket__number">#{ticket.number}</div>
                      <div className="ticket__title">{ticket.title}</div>
                      <div
                        className={`ticket__status ticket__status--${
                          STATUS_ENUM[ticket.status]
                        }`}
                      ></div>
                      <div className="ticket__estimate">{ticket.estimate}</div>
                    </Link>
                  </li>
                )
              )
            })}
            {/* {this.props.backlog &&
              this.props.tickets.tickets.map((ticket, i) => {
                // console.log('ticket', ticket)
                return (
                  !ticket.sprintId &&
                  this.props.project._id === ticket.projectId && (
                    <li
                      className={`ticket ${
                        this.props.tickets.selected._id === ticket._id
                          ? 'ticket--selected'
                          : ''
                      }`}
                      id={ticket._id}
                      key={i}
                      onClick={this.handleClick}
                    >
                      <div className="ticket__number">#{ticket.number}</div>
                      <div className="ticket__title">{ticket.title}</div>
                      <div
                        className={`ticket__status ticket__status--${
                          STATUS_ENUM[ticket.status]
                        }`}
                      ></div>
                      <div className="ticket__estimate">{ticket.estimate}</div>
                    </li>
                  )
                )
              })} */}
          </ul>
        </li>
      </ul>
    )
  }
}

export default BacklogList
