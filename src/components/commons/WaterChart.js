import React from 'react';
import { Box, Paper, Typography } from '@material-ui/core';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale, LinearScale } from 'chart.js';

Chart.register(CategoryScale, LinearScale);


/**
 * Componente que renderiza um gráfico de barras com as quantidades de água disponíveis.
 *
 * @component
 * @returns {JSX.Element}
 */
function WaterChart() {
    const data = {
        labels: ['Q Explotável', 'Q Outorgada', 'Q Disponível', 'Q Usuário'],
        datasets: [
            {
                label: 'Quantidades',
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#008080'],
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(0,0,0,0.2)',
                hoverBorderColor: 'rgba(0,0,0,1)',
                data: [400, 250, 300, 150]
            }
        ]
    };

    const options = {
        maintainAspectRatio: false,
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    };

    return (
        <Box>
            <Typography style={{ margin: 5 }}>Coordenadas </Typography>
            <Paper elevation={3} style={{ padding: 5 }}>
                <Box>
                    <Bar
                        data={data}
                        options={options}
                        width={500}
                        height={300}
                    />
                </Box>
            </Paper>

        </Box>
    );
}

export default WaterChart;
