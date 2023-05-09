import React, { useState, useEffect }  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Invoice from './pages/invoice/Invoice';
import Edit from './pages/invoice/Edit';
import Error from './pages/Error';
import Landing from './pages/Landing';
import { store } from './store';


export const ThemeContext = React.createContext({})

export const UserContext = React.createContext("")

function App() {


  const [darkMode, setDarkMode] = useState(true)

  // USER OR GUEST

  const [user, setUser] = useState(localStorage.getItem("user") == null ? null : Object.values(JSON.parse(localStorage.getItem("user")))[3] == null ? Object.values(JSON.parse(localStorage.getItem("user")))[1] : Object.values(JSON.parse(localStorage.getItem("user")))[3])

  console.log(user)
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Dashboard />} />
            <Route path="/invoice/:id" element={<Invoice />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Error />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </div>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
