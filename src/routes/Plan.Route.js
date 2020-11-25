import React from 'react'

import Navbar from '../components/Navbar.Component'
import Sidebar from '../components/Sidebar.Component'
import BacklogView from '../components/BacklogView.Component'
import EditorView from '../components/Editor.Component'

function PlanRoute(props) {
  return (
    <>
      <Navbar />
      <Sidebar routerProps={props} />
      <BacklogView routerProps={props} />
      <EditorView routerProps={props} />
    </>
  )
}

export default PlanRoute
