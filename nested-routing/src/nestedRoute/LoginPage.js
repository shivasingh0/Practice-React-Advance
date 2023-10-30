
import { Outlet, useNavigate } from 'react-router-dom'

function LoginPage() {
  const navigate = useNavigate()

  const submit = () => {
    navigate('/firstuser')
  }
  return (
    <div>
      <h1>Login Page</h1>
      <input type="email" placeholder='email' />
      <input type="password" placeholder='password' />
      <button type='button' onClick={submit} >Login</button>
      <Outlet/>
    </div>
  )
}

export default LoginPage
