/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
// import { useNavigate, useLocation } from 'react-router-dom';
import './App.css';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [rent, setRent] = useState('');
  const [gas, setGas] = useState('');
  const [water, setWater] = useState('');
  const [electric, setElectric] = useState('');

  //   const { state } = useLocation();
  //   console.log(state);
  //   if (!state.authToken) {
  //     return <Navigate to="/login" />;
  //   }

  //  const navigate = useNavigate();

  const handleSubmit = () => {
    fetch('http://localhost:3600/expenses/', {
      method: 'POST',
      body: JSON.stringify({
        rent,
        gas,
        water,
        electric,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((res) => res.json())
      // eslint-disable-next-line
      .then((data) => console.log(data));
  };

  useEffect(() => {
    fetch('http://localhost:3600/expenses/', {
      method: 'GET',
    }).then((res) => res.json())
      .then((data) => setExpenses(data));
  }, []);

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
          <h2>Expenses</h2>
          <form className="expenses-form">
            <TextField className="expeses-field" rent={rent} id="rent" name="rent" label="Rent" margin="normal" value={rent} onChange={(e) => setRent(e.target.value)} />

            <TextField gas={gas} id="gas" name="gas" label="Gas" margin="normal" value={gas} onChange={(e) => setGas(e.target.value)} />

            <TextField water={water} id="water" name="water" label="Water" margin="normal" value={water} onChange={(e) => setWater(e.target.value)} />

            <TextField electric={electric} id="electric" name="electric" label="Electric" margin="normal" value={electric} onChange={(e) => setElectric(e.target.value)} />

            <Button className="add-button" variant="contained" onClick={() => handleSubmit()}>Add</Button>
          </form>
          <form className="expenses-form">
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <b>USERNAME</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>RENT</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>GAS</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>WATER</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>ELECTRIC</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {expenses.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={
                        {
                          '&:last-child td, &:last-child th':
                      { border: 0 },
                        }
                    }
                    >
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="right">
                        {row.Rent}
                      </TableCell>
                      <TableCell align="right">
                        {row.Gas}
                      </TableCell>
                      <TableCell align="right">
                        {row.Water}
                      </TableCell>
                      <TableCell align="right">
                        {row.Electric}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </form>
        </div>
      </main>
    </div>
  );
}
export default Expenses;
