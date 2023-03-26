import * as React from "react";
import PropTypes from "prop-types";
// import SwipeableViews from 'react-swipeable-views';
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./tab.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import Drawer from "@mui/material/Drawer";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

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
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function LabTabs(props) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [state, setState] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const matches = useMediaQuery("(max-width: 720px)");

  return (
    <div className="parent">
      {matches && (
        <ChevronRightIcon
          style={{
            position: "fixed",
            insetBlockStart: "50%",
            insetInlineStart: 0,
            color: "white",
            fontSize: "40px",
          }}
          onClick={() => setState(true)}
        />
      )}
      {matches ? (
        <Drawer
          anchor={"left"}
          open={state}
          sx={{
            opacity: 0.9,
            // backgroundColor: "blue",
            display: "flex",
            height: "100px",
            alignItems: "center",
          }}
          onClose={() => setState(false)}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "200px",
              height: "100%",
              backgroundColor: "#080402",
              color: "white",
              alignItems: "flex-start",
              zIndex: 100,
            }}
          >
            <span
              style={{
                height: "70px",
                width: "100%",
                marginBottom: "20px",
                borderBottom: "1px solid gray",
              }}
            ></span>
            <Tab
              className="tabs"
              label="School Events"
              {...a11yProps(0)}
              onClick={() => props.onScroll("d0")}
            />
            <Tab
              className="tabs"
              label="Design & Arts"
              {...a11yProps(0)}
              onClick={() => props.onScroll("d6")}
            />
            <Tab
              className="tabs"
              label="Art of Colour"
              {...a11yProps(0)}
              onClick={() => props.onScroll("d5")}
            />
            <Tab
              className="tabs"
              label="Drama"
              {...a11yProps(0)}
              onClick={() => props.onScroll("d4")}
            />
            <Tab
              className="tabs"
              label="Fashion"
              {...a11yProps(0)}
              onClick={() => props.onScroll("d3")}
            />
            <Tab
              className="tabs"
              label="Singing/Dancing"
              {...a11yProps(0)}
              onClick={() => props.onScroll("d2")}
            />
            <Tab
              className="tabs"
              label="Speaking Art"
              {...a11yProps(0)}
              onClick={() => props.onScroll("d1")}
            />
          </div>
        </Drawer>
      ) : (
        <div className="tabsBorder">
          <Box
            style={{ backgroundColor: "black" }}
            sx={{ backgroundColor: "black", width: 750 }}
          >
            <AppBar
              position="static"
              style={{ backgroundColor: "transparent" }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example"
                style={{ color: "white" }}
                TabIndicatorProps={{
                  style: {
                    background:
                      "linear-gradient(220.94deg, #3D80FF 20%, #903BF5 50%)",
                  },
                }}
              >
                <Tab
                  className="tabs"
                  label="School Events"
                  {...a11yProps(0)}
                  onClick={() => props.onScroll("d0")}
                />
                <Tab
                  className="tabs"
                  label="Design & Arts"
                  {...a11yProps(0)}
                  onClick={() => props.onScroll("d6")}
                />
                <Tab
                  className="tabs"
                  label="Art of Colour"
                  {...a11yProps(0)}
                  onClick={() => props.onScroll("d5")}
                />
                <Tab
                  className="tabs"
                  label="Drama"
                  {...a11yProps(0)}
                  onClick={() => props.onScroll("d4")}
                />
                <Tab
                  className="tabs"
                  label="Fashion"
                  {...a11yProps(0)}
                  onClick={() => props.onScroll("d3")}
                />
                <Tab
                  className="tabs"
                  label="Singing/Dancing"
                  {...a11yProps(0)}
                  onClick={() => props.onScroll("d2")}
                />
                <Tab
                  className="tabs"
                  label="Speaking Art"
                  {...a11yProps(0)}
                  onClick={() => props.onScroll("d1")}
                />
              </Tabs>
            </AppBar>
          </Box>
        </div>
      )}
    </div>
  );
}
