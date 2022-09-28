import React from 'react'

const Register = () => {
  return (
    <div>
      <h1> Register</h1>
      <form>
        <div>
        <span> Username </span>
        <input placeholder="Enter a username" />
        </div>
        <div>
        <span> Email </span>
        <input placeholder="Enter your email" />
        </div>
        <div>
        <span> Password </span>
        <input placeholder="Choose a password" />
        </div>
        <div>
        <span> Password Comfirmation </span>
        <input placeholder="Confirm your password" />
        </div>
        <button type="submit"> Create an account </button>
      </form>
    </div>
  )
}

export default Register