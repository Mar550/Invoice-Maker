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
import Dropdown from './components/dropdown/Dropdown';


export const ThemeContext = React.createContext({})

export const UserContext = React.createContext("")

function App() {


  const [darkMode, setDarkMode] = useState(true)
  // USER OR GUEST

  const [userId, setUserId] = useState(localStorage.getItem("user") == null ? null : JSON.parse(localStorage.getItem("user"))["_id"])
  console.log(userId);

  

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <UserContext.Provider value={{ userId, setUserId }}>
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
            <Route path="/dropdown" element={<Dropdown />} />
          </Routes>
        </BrowserRouter>
      </div>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
