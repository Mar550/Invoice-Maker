import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Expense from './pages/Expense';
import Income from './pages/Income';
import Dashboard from './pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "./components/Sidebar";
import './App.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar/>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dahsboard" element={<Dashboard />} />
            <Route path="/expense" element={<Expense />} />
            <Route path="/income" element={<Income />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
