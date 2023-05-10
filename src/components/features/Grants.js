import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    maxHeight: 440,
    margin: 10
  },
});

/**
 * Função que retorna uma tabela com dados de concessões e uma rolagem horizontal.
 * @function Grants
 * @returns {JSX.Element} Componente React que renderiza uma tabela com dados de concessões.
 */
function Grants() {
  const classes = useStyles();
  const monthlyWaterPermits = [
    {jan: 0},
    {fev: 10},
    {mar: 15},
    {abr: 25},
    {mai: 30},
    {jun: 35},
    {jul: 40},
    {ago: 45},
    {set: 50},
    {out: 55},
    {nov: 60},
    {dez: 65}
  ];

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table stickyHeader aria-label="Tabela de Concessões">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>CPF/CNPJ</TableCell>
            <TableCell>Processo</TableCell>
            <TableCell>Endereço</TableCell>
            {monthlyWaterPermits.map((permit, index) => (
              <TableCell key={index}>{Object.keys(permit)}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>123.456.789-00</TableCell>
            <TableCell>001/2021</TableCell>
            <TableCell>123 Main St</TableCell>
            {monthlyWaterPermits.map((permit, index) => (
              <TableCell key={index}>{Object.values(permit)}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Jane Doe</TableCell>
            <TableCell>12.345.678/0001-99</TableCell>
            <TableCell>002/2021</TableCell>
            <TableCell>456 Oak St</TableCell>
            {monthlyWaterPermits.map((permit, index) => (
              <TableCell key={index}>{Object.values(permit)}</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Grants;
