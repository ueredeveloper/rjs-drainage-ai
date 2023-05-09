import React from 'react';
import { Paper, Radio, RadioGroup, FormControlLabel, Typography, Box } from '@material-ui/core';

/**
 * Componente que renderiza o tipo outorgado, se Tubular (profundo) ou Manual (cisterna).
 *
 * @component
 * @returns {JSX.Element}
 */
function WellType() {
    const [wellType, setWellType] = React.useState('manual');

    /**
     * Função chamada quando o usuário seleciona uma opção.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} event - Evento gerado quando o usuário seleciona uma opção.
     */
    const handleRadioChange = (event) => {
        setWellType(event.target.value);
    };

    return (
        <Box>
            <Typography style={{ margin: 5 }} >Tipo do Poço</Typography>
            <Paper elevation={3} style={{ padding: 5 }}>

                <RadioGroup row value={wellType} onChange={handleRadioChange} style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <FormControlLabel value="manual" control={<Radio />} label="Manual / Tubular Raso" />
                    <FormControlLabel value="profundo" control={<Radio />} label="Tubular Profundo" />
                </RadioGroup>
            </Paper>
        </Box>

    );
}

export default WellType;
