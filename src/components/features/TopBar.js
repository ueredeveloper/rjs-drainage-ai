import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

/**
 * Função que retorna uma AppBar com o ícone do menu e o texto "SAD-DF"
 * @returns {JSX.Element}
 */
function TopBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          SAD-DF
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
