import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import { Register } from './Register';
// eslint-disable-next-line import/no-named-as-default
import Login from './Login';
// eslint-disable-next-line import/no-named-as-default
import Dashboard from './Dashboard';
// eslint-disable-next-line import/no-named-as-default
import Expenses from './Expenses';
// eslint-disable-next-line import/no-named-as-default
import Tasks from './Tasks';
// eslint-disable-next-line import/no-named-as-default
import Activities from './Activities';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Expenses" element={<Expenses />} />
          <Route path="/Tasks" element={<Tasks />} />
          <Route path="/Activities" element={<Activities />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
