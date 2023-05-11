import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Drawer, List, ListItem, ListItemIcon, ListItemText, Grid } from '@mui/material';
import { Badge, Button } from '@mui/material';
import { Box } from '@mui/system';

const data = [  { 
    district: "Bird District", availability1: "100", availability2: "100", dpt1: "18", dpt2: "14", dpt3: "12", bcg: "49", mvc1: "52", fullyImm: "5" }, 
     { district: "Cat District", availability1: "100", availability2: "100", dpt1: "18", dpt2: "14", dpt3: "12", bcg: "49", mvc1: "52", fullyImm: "5" }, 
      { district: "Dessert District", availability1: "100", availability2: "100", dpt1: "18", dpt2: "14", dpt3: "12", bcg: "49", mvc1: "52", fullyImm: "5" },
      { district: "Dinner District", availability1: "100", availability2: "100", dpt1: "18", dpt2: "14", dpt3: "12", bcg: "49", mvc1: "52", fullyImm: "5" },
      { district: "Dog District", availability1: "100", availability2: "100", dpt1: "18", dpt2: "14", dpt3: "12", bcg: "49", mvc1: "52", fullyImm: "5" },
      { district: "Fish District", availability1: "100", availability2: "100", dpt1: "18", dpt2: "14", dpt3: "12", bcg: "49", mvc1: "52", fullyImm: "5" },
      { district: "Fruit District", availability1: "100", availability2: "100", dpt1: "18", dpt2: "14", dpt3: "12", bcg: "49", mvc1: "52", fullyImm: "5" },
      { district: "Food District", availability1: "100", availability2: "100", dpt1: "18", dpt2: "14", dpt3: "12", bcg: "49", mvc1: "52", fullyImm: "5" },
    ]

const TableData = () => {
  return (
    <Grid container direction="column">
      <Box sx={{ display: 'fixed', justifyContent: 'space-between' }}>
        <h5 className="card-title">All Data <span>| Today</span></h5>
        <div>
          <Button variant="contained" sx={{ bgcolor: 'success.main', color: 'white', mr: 1 }}>Target Achieved/ on track</Button>
          <Button variant="contained" sx={{ bgcolor: 'warning.main', color: 'white', mr: 1 }}>Progress, but more effort is required</Button>
          <Button variant="contained" sx={{ bgcolor: 'error.main', color: 'white', mr: 1 }}>Not on track</Button>
          <Button variant="contained" sx={{ bgcolor: 'background.paper', color: 'text.primary' }}>N/A</Button>
        </div>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650  }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: '#e8edf1' }}>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Availability of Vaccines BCG(no stockout)</TableCell>
              <TableCell>Availability of Vaccines BCG(no stockout)</TableCell>
              <TableCell>DPT1 coverage</TableCell>
              <TableCell>DPT2 coverage</TableCell>
              <TableCell>DPT3 coverage</TableCell>
              <TableCell>BCG coverage</TableCell>
              <TableCell>MVC1 coverage</TableCell>
              <TableCell>Fully Immunized</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell scope="row" sx={{ backgroundColor: '#f2f5f7' }}>
                  <a href="#">{row.district}</a>
                </TableCell>
                <TableCell className="border-top" sx={{ backgroundColor: '#448201' }}>
                  <a href="#" className="text-dark">{row.availability1}</a>
                </TableCell>
                <TableCell className="border-top" sx={{ backgroundColor: '#448201' }}>
                  <a href="#" className="text-dark">{row.availability2}</a>
                </TableCell>
                <TableCell className="border-top" sx={{ backgroundColor: '#ef4f17' }}>
                <a href="#" className="text-dark">{row.availability2}</a>
                    </TableCell>
                    <TableCell className="border-top" sx={{ backgroundColor: '#ef4f17' }}>
                <a href="#" className="text-dark">{row.availability2}</a>
                    </TableCell>
                    <TableCell className="border-top" sx={{ backgroundColor: '#ed6c03' }}>
                <a href="#" className="text-dark">{row.availability2}</a>
                    </TableCell>
                    <TableCell className="border-top" sx={{ backgroundColor: '#ed6c03' }}>
                <a href="#" className="text-dark">{row.availability2}</a>
                    </TableCell>
                    <TableCell className="border-top" sx={{ backgroundColor: '#ef4f17' }}>
                <a href="#" className="text-dark">{row.availability2}</a>
                    </TableCell>
                    <TableCell className="border-top" sx={{ backgroundColor: '#ef4f17' }}>
                <a href="#" className="text-dark">{row.availability2}</a>
                    </TableCell>
                </TableRow>
            ))}
            </TableBody>
            </Table>
            </TableContainer>
            </Grid>
  )}
  export default TableData;