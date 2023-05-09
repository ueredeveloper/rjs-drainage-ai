import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import LatLng from './components/commons/LatLng';
import WellType from './components/commons/WellType';
import WaterChart from './components/commons/WaterChart';
import MyMap from './components/commons/MyMap';
import TopBar from './components/features/TopBar';
import Analyse from './components/features/Analyse';
import FootBar from './components/features/FootBar';
import Grants from './components/features/Grants';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    
  },
  topBox: {
   
    //backgroundColor: theme.palette.primary.main,
  },
  contentBox: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  mapBox: {
    flex: 1,
    margin: 5,
   // backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.down('sm')]: {
      flex: 1,
    },
  },
  infoBox: {
    flex: 1,
    margin: 5,
   // backgroundColor: theme.palette.secondary.light,
    [theme.breakpoints.down('sm')]: {
      flex: 1,
    },
  },
  footer: {
   // height: '100px',
    backgroundColor: theme.palette.primary.dark,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.topBox} >
        <TopBar/>
      </Box>
      <Box className={classes.contentBox}>
        <Box className={classes.mapBox} >
          <MyMap apiKey={""} lat={37.7749} lng={-122.4194} zoom={10} />
        </Box>
        <Box className={classes.infoBox} >
          <LatLng />
          <WellType />
          <Analyse/>
          <WaterChart />
        </Box>
      </Box>
      <Box>
        <Grants/>
      </Box>
      <Box className={classes.footer} >
        <FootBar/>
      </Box>
    </Box>
  );
}

export default App;
