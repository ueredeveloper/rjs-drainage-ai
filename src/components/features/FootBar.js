import React from 'react';
import { Link, Typography, makeStyles } from '@material-ui/core';

/**
 * Função que retorna o rodapé da aplicação com três links centralizados: "Home", "Sobre" e "outorga@adasa.df.gov.br".
 * @returns {JSX.Element} Rodapé contendo os links.
 */
function FootBar() {
    const useStyles = makeStyles({
        root: {
            display: 'flex',
            justifyContent: 'center', 
            height: 100

        },
        link: {

            color: 'secondary'
        }
    });

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Link
                component="button"
                variant="body2"

                onClick={() => {
                    console.info("I'm a button.");
                }}
            >
                <Typography style={{ color: '#FFF', margin: 5 }}>Home</Typography>
            </Link>
            <Link
                component="button"
                variant="body2"
                className={classes.link}
                onClick={() => {
                    console.info("I'm a button.");
                }}
            >
                <Typography style={{ color: '#FFF', margin: 5 }} >Sobre</Typography>
            </Link>

        </div>
    );
}

export default FootBar;
