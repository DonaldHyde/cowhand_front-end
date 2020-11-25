import React from 'react'

function WorkIcon(props) {
  return (
    <svg
      {...props}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="4" height="28" fill="#C4C4C4" />
      <rect x="4" y="24" width="24" height="4" fill="#C4C4C4" />
      <rect x="4" y="5" width="14" height="4" fill="#C4C4C4" />
      <rect x="14" y="9" width="4" height="4" fill="#C4C4C4" />
      <rect x="14" y="13" width="10" height="4" fill="#C4C4C4" />
    </svg>
  )
}

export default WorkIcon
