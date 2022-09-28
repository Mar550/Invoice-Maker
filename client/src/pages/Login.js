import React from 'react'

const Login = () => {
  return (
    <div>
      <h1> LOGIN</h1>
      <form>
        <div>
        <span> Email </span>
        <input placeholder="Enter your email" />
        </div>
        <div>
        <span> Password </span>
        <input placeholder="Enter your password" />
        </div>
        <button type="submit"> Sign In </button>
      </form>
    </div>
  )
}

export default Login