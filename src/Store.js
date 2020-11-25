import React, { useState } from 'react'

export const Context = React.useContext()

const initialState = {
  project: {
    name: '',
    id: '',
  },
  sprint: {
    name: '',
    id: '',
  },
  ticket: {
    name: '',
    id: '',
  },
}

const Store = ({ children }) => {
  const [state, setState] = useState(initialState)

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  )
}

export default Store
