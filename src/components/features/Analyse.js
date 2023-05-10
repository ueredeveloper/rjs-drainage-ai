import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, makeStyles, Typography, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    tableWrapper: {
        overflowX: 'auto',
        [theme.breakpoints.down('sm')]: {
            overflowX: 'scroll'
        }
    },
    nowrap: {
        whiteSpace: 'nowrap'
    }
}));

/**
 * Retorna uma tabela com informações de análise.
 * @returns {JSX.Element} Tabela com uma linha contendo informações de "UH", "Sistema", "Código",
 * "Explotável (m³/ano)", "N° Poços", "Q Total Outorgada (m³/ano)", "% UTILIZADA",
 * e "Vol. Disponível (m³/ano)" com scroll horizontal em dispositivos maiores.
 */
function Analyse() {
    const classes = useStyles();

    return (
        <div className={classes.tableWrapper}>
            <Typography style={{ margin: 5 }} >Análise de Disponibilidade </Typography>
            <Paper elevation={3} style={{ padding: 5, margin: 5 }}>      
                <Table>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.nowrap}>UH</TableCell>
                        <TableCell className={classes.nowrap}>Sistema</TableCell>
                        <TableCell className={classes.nowrap}>Código</TableCell>
                        <TableCell className={classes.nowrap}>Explotável (m³/ano)</TableCell>
                        <TableCell className={classes.nowrap}>N° Poços</TableCell>
                        <TableCell className={classes.nowrap}>Q Total Outorgada (m³/ano)</TableCell>
                        <TableCell className={classes.nowrap}>% UTILIZADA</TableCell>
                        <TableCell className={classes.nowrap}>Vol. Disponível (m³/ano)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell className={classes.nowrap} component="th" scope="row">
                            UH1
                        </TableCell>
                        <TableCell>Sistema A</TableCell>
                        <TableCell>COD01</TableCell>
                        <TableCell>1000</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>800</TableCell>
                        <TableCell>80%</TableCell>
                        <TableCell>200</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            </Paper>    </div>
    );
}

export default Analyse;
