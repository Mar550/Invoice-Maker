import React, { useState }  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Invoice from './pages/invoice/Invoice';
import Edit from './pages/invoice/Edit';
import Error from './pages/Error';

export const ThemeContext = React.createContext({})

function App() {
  
  const [darkMode, setDarkMode] = useState(true)

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/invoices" element={<Dashboard />} />
            <Route path="/invoice/:id" element={<Invoice />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
