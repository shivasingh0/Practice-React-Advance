import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Second() {
  return (
    <div>
      <h1>Second</h1>
      <Link to='thirduser' >Go to third</Link>
      <Outlet/>
    </div>
  )
}

export default Second
