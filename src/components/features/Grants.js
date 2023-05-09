import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function Grants() {
  const classes = useStyles();

  const grantData = [
    { name: 'John Doe', cpf_cnpj: '123.456.789-10', process: '1234/2021', address: '123 Main St, Anytown USA', months: ['jan'] },
    { name: 'Jane Smith', cpf_cnpj: '987.654.321-00', process: '5678/2021', address: '456 Oak Ave, Othertown USA', months: [] },
    { name: 'Bob Johnson', cpf_cnpj: '111.222.333-44', process: '4321/2021', address: '789 Elm St, Somewhere USA', months: ['jan'] },
  ];

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="grant table" horizontalScroll>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="right">CPF/CNPJ</TableCell>
            <TableCell align="right">Processo</TableCell>
            <TableCell align="right">Endereço</TableCell>
            <TableCell align="right">Meses</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {grantData.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.cpf_cnpj}</TableCell>
              <TableCell align="right">{row.process}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.months.includes('jan') ? 'jan' : ''}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Grants;
