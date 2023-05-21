import axios from 'axios';

const API_URL = 'https://invoice-maker-api-one.vercel.app/api/auth/'

//Register user
const register = async (userData) => {
    const response = await axios.post(API_URL + 'register', userData)
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

// Guest session
const session = async (userData) => {
  const response = await axios.post(API_URL + 'session', userData)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

// Logout user
const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    logout,
    login,
    session
}

export default authService;