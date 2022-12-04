import React, { Component }  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import Expense from './pages/expense/Expense';
import Income from './pages/income/Income';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Popup from "./pages/expense/Popup";
import Graph from "./pages/chart/Chart";
import New from "./pages/chart/New";
import Home from "./pages/Home";
import Login from './pages/Login';
import List from './pages/invoice/List';
import Invoice from './pages/invoice/Invoice';
import Edit from './pages/invoice/Edit';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/invoices" element={<List />} />
            <Route path="/expense" element={<Expense />} />
            <Route path="/income" element={<Income />} />
            <Route path="/invoice/:id" element={<Invoice />} />
            <Route path="/popup" element={<Popup />} />
            <Route path="/chart/:id" element={<Graph />} />
            <Route path="/chart/create" element={<New />} />
            <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
