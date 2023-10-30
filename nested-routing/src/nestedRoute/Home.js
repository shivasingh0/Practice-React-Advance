import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to='/login' >Go to login page</Link>
      <Outlet/>
    </div>
  )
}

export default Home
