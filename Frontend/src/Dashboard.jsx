/* eslint-disable react/jsx-filename-extension */
import { Button } from '@mui/material';
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './App.css';

export function Dashboard() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

  const { state } = useLocation();
  // eslint-disable-next-line
  console.log(state);
  if (!state.authToken) {
    return <navigate to="/login" />;
  }

  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <aside>
        <div className="top">
          <div className="menu">
            <a href="./Dashboard">
              <span className="material-symbols-outlined">menu</span>
            </a>
          </div>
          <div className="close" id="close-btn">
            <span className="material-symbols-outlined">close</span>
          </div>
        </div>
        <div className="sidebar">
          <a href="./Dashboard">
            <span className="material-symbols-outlined">home</span>
          </a>
          <a href="./Dashboard">
            <span className="material-symbols-outlined">payments</span>
          </a>
          <a href="./Dashboard">
            <span className="material-symbols-outlined">task</span>
          </a>
          <a href="./Dashboard">
            <span className="material-symbols-outlined">person</span>
          </a>
          <a href="./Dashboard">
            <span className="material-symbols-outlined">groups</span>
          </a>
          <a href="./Dashboard">
            <span className="material-symbols-outlined">admin_panel_settings</span>
          </a>
          <a href="./Login">
            <span className="material-symbols-outlined">logout</span>
            {/* onClick={() => state.authToken.clear()} */}
          </a>
        </div>
      </aside>
      <main>
        <div className="header-text">
          <p>Welcome back, Sebi</p>
          <p>{date}</p>
        </div>
        <div className="insights">
          <div className="expenses">
            <h1> 5 </h1>
            <h2> Unpaid Expenses</h2>
            <Button variant="contained" margin="normal" onClick={() => navigate('/Expenses')}> See more </Button>

          </div>
          <div className="tasks">
            <h1> 3 </h1>
            <h2> Tasks to do</h2>
            <Button variant="contained" margin="normal" onClick={() => navigate('/Tasks')}> See more</Button>

          </div>
          <div className="activities">
            <h1> 3 </h1>
            <h2> New activities</h2>
            <Button variant="contained" margin="normal" onClick={() => navigate('/Activities')}> See more</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Dashboard;
