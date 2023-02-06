/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// import { TextField, Button } from '@mui/material';
// import { useNavigate, useLocation } from 'react-router-dom';
import './App.css';

export function Tasks() {
  //   const { state } = useLocation();
  //   console.log(state);
  //   if (!state.authToken) {
  //     return <Navigate to="/login" />;
  //   }

  //  const navigate = useNavigate();

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
        <div className="expenses-form-container">
          <h2>Tasks</h2>
        </div>
      </main>
    </div>
  );
}
export default Tasks;
