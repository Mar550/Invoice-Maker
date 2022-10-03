import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Expense from './pages/expense/Expense';
import Income from './pages/income/Income';
import Dashboard from './pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "./components/Sidebar";
import './App.css';
import Popup from "./pages/expense/Popup";

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
            <Route path="/popup" element={<Popup />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
