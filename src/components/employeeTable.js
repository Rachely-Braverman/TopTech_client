import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function EmployeeTable(props) {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`https://localhost:44382/api/Visit`,props.data)
    .then(res => {
      setData(res.data)
    }
    )
  }, [props.data])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">מיקום היעד</TableCell>
            <TableCell align="right">סוג השירות</TableCell>
            <TableCell align="right">שעה</TableCell>
            <TableCell align="right">משך זמן שהייה</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.place}</TableCell>
              <TableCell align="right">{row.service}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.stayTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
