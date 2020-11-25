import React from 'react'

class CustomSelect extends React.Component {
  render() {
    return (
      <select className="editor__select editor__select--status editor__select--todo">
        <option>To Do</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
    )
  }
}

export default CustomSelect
