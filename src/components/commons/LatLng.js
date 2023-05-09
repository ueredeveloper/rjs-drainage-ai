
import { Typography } from '@material-ui/core';
import { Box, IconButton, Paper, TextField } from '@mui/material';
import React from 'react';
import { FaSearch, FaCopy } from 'react-icons/fa';


/**
 * Função que retorna um componente Paper com dois campos de texto para definir a Latitude e Longitude, e dois ícones para buscar e copiar os valores.
 *
 * @returns {React.FunctionComponent} Componente LatLng.
 */
function LatLng() {
    return (
        <Box>
            <Typography style={{ margin: 5 }} >Coordenadas </Typography>
            <Paper elevation={3} style={{ padding: 5 }}>
                <Box display="flex" alignItems="center" sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <TextField label="Latitude" variant="standard" sx={{flexGrow: 1, marginRight: 2}} />
                    <TextField label="Longitude" variant="standard" sx={{flexGrow: 1, marginRight: 2}} />
                    <IconButton aria-label="Buscar">
                        <FaSearch />
                    </IconButton>
                    <IconButton aria-label="Copiar">
                        <FaCopy />
                    </IconButton>
                </Box>
            </Paper>
        </Box>

    );
}

export default LatLng;
