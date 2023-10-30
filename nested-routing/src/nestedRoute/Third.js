import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Third() {
  return (
    <div>
      <h1>Third</h1>
      <Link to='hello' >Go to hello page</Link>
      <Outlet/>
    </div>
  )
}

export default Third;
