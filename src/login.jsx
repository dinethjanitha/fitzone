import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import App from './App'
import axios from 'axios'
import './login.css'

const Login = () => {
  const [email, setemail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(email)
    console.log(password)
    try {
      const response = await axios.post(
        'http://127.0.0.1:3000/api/v1/user/signin',
        {
          email: email.trim(), // Ensure no extra spaces
          password: password.trim(),
        }
      )

      console.log(email)
      console.log(password)
      // Handle successful login
      localStorage.setItem('token', response.data.token)

      // Redirect to the home page
      console.log(response.data)
      setSuccessMessage('Sign In Pass!')
      navigate('/')
    } catch (err) {
      // Log the error response to debug
      setError(err.response.data.message)
      console.error(err.response.data.message)
      //   setError('Invalid credentials. Please try again.')
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        {error && <p className="error-msg">{error}</p>}
        {successMessage && <p className="success-msg">{successMessage}</p>}
      </div>
    </div>
  )
}

export default Login
