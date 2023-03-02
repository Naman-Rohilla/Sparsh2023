

import * as React from 'react';
import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './tab.css'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function LabTabs(props) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className="tabsBorder">
    <Box style={{backgroundColor:'black'}} sx={{ backgroundColor:'black', width: 400 }}>
      <AppBar position="static" style={{backgroundColor: 'transparent'}}>
        <Tabs
          
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        style={{ color: 'white'}}
        TabIndicatorProps={{style: {background:'linear-gradient(220.94deg, #3D80FF 20%, #903BF5 50%)'}}}
        >
          <Tab label="Dance" {...a11yProps(0)} onClick={()=>props.onScroll('d1')}/>
          <Tab label="Music" {...a11yProps(1)} onClick={()=>props.onScroll('d2')}/>
          <Tab label="Day 3" {...a11yProps(2)} onClick={()=>props.onScroll('d3')}/>
          <Tab label="Day 4" {...a11yProps(1)} onClick={()=>props.onScroll('d4')}/>
        </Tabs>
      </AppBar>
      
    </Box>
    </div>
  );
}