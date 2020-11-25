import React from 'react'
import { Link } from 'react-router-dom'

import { tickets } from '../dummy'
import '../static/css/editor.component.css'

import CustomSelect from './CustomSelect.component'

const STATUS_ENUM = {
  'To Do': 'todo',
  'In Progress': 'in-progress',
  Completed: 'completed',
}

class EditorView extends React.Component {
  constructor() {
    super()

    this.state = {
      ticket: {},
      ticketId: '',
    }
  }

  componentDidMount() {
    const { location } = this.props.routerProps
    const queryParams = new URLSearchParams(location.search)

    const ticketId = queryParams.get('selectedTicket')

    const fetchedTicket = tickets.filter((ticket) => ticket._id === ticketId)

    this.setState({
      ticket: fetchedTicket[0],
      ticketId,
    })
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props.routerProps

    if (location.search !== prevProps.routerProps.location.search) {
      const queryParams = new URLSearchParams(location.search)
      const selectedTicket = queryParams.get('selectedTicket')

      const ticket = tickets.find((ticket) => ticket._id === selectedTicket)

      this.setState({
        ticket,
        ticketId: selectedTicket,
      })
    }
  }

  render() {
    const { ticket, ticketId } = this.state
    const { location } = this.props.routerProps

    // console.log(location)

    return (
      (ticketId && (
        <div className="editor">
          <div className="editor__header">
            <h3 className="editor__title">
              <span className="editor__number">#{ticket.number}</span>
              {ticket.title}
            </h3>
            <Link to={location.pathname}>
              <div className="editor__close"></div>
            </Link>
          </div>
          <div className="editor__body">
            <div className="editor__group">
              <label className="editor__label" htmlFor="status">
                Status
              </label>
              <div
                className={`editor__status editor__status--${
                  STATUS_ENUM[ticket.status]
                }`}
              ></div>
            </div>
            <div className="editor__group">
              <label className="editor__label" htmlFor="assignedTo">
                Assigned To
              </label>
              <div className="editor__name">{ticket.assignedTo}</div>
            </div>
            {/* <div className="editor__group">
            <label className="editor__label" htmlFor="sprint">
              Sprint
            </label>
            <div className="editor__name">{ticket.sprintId}</div>
          </div> */}
            <div className="editor__group">
              <label className="editor__label" htmlFor="description">
                Description
              </label>
              <div className="editor__description">
                {ticket.description ? (
                  <p>{ticket.description}</p>
                ) : (
                  <button className="editor__button">+ Add</button>
                )}
              </div>
            </div>
            <div className="editor__group">
              <label className="editor__label" htmlFor="attachments">
                Attachments
              </label>
              <div className="editor__attachments">
                <button className="editor__button">+ Add</button>
              </div>
            </div>
            <div className="editor__group">
              <label className="editor__label" htmlFor="comments">
                Comments
              </label>
              <div className="editor__comments">
                <button className="editor__button">+ Add</button>
              </div>
            </div>
          </div>
        </div>
      )) ||
      null
    )
  }
}

export default EditorView
