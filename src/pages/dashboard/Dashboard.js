import React, { useState } from "react";
import {
  Grid,
  Select,
  OutlinedInput,
  MenuItem,
  Button,
  Card
} from "@material-ui/core";
import SettingsIcon from '@material-ui/icons/Settings';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useTheme } from "@material-ui/styles";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  YAxis,
  XAxis,
} from "recharts";

// styles
import useStyles from "./styles";

// components
import Widget from "../../components/Widget";
import PageTitle from "../../components/PageTitle";
import { Typography } from "../../components/Wrappers";
import Dot from "../../components/Sidebar/components/Dot";
import AppGroup from "../../components/AppGroup/appgroup";
import AppGroup1 from "../../components/AppGroup/appgroup1";
import UserGroup from "../../components/UserGroup/usergroup";
import UserGroup1 from "../../components/UserGroup/usergroup1";

// Media
import Firstimage from "../../images/google.svg";

const mainChartData = getMainChartData();

export default function Dashboard(props) {
  var classes = useStyles();
  var theme = useTheme();

  // local
  var [mainChartState, setMainChartState] = useState("monthly");

  return (
    <>
      <PageTitle title="Dashboard" button={<Button
      variant="contained"
      size="medium"
      className={classes.managebtn}
    >
        <SettingsIcon className={classes.settingsicon} /> Manage
    </Button>} />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Card className={classes.d_flex}>
            <AppGroup 
              title="48" 
              subtitle="Apps Submitted" 
              status="22.45%" 
              icon={<ExpandLessIcon />} 
              cardimage={Firstimage}
            />
            <AppGroup 
              title="5" 
              subtitle="Websites" 
              status="15.34%" 
              icon={<ExpandLessIcon />} 
              cardimage={Firstimage}
            />
            <AppGroup 
              title="45,000" 
              subtitle="App Downloads" 
              status="22.45%" 
              icon={<ExpandLessIcon />} 
              cardimage={Firstimage}
            />
            <AppGroup 
              title="456k" 
              subtitle="Website Visites" 
              status="15.34%" 
              icon={<ExpandLessIcon />} 
              cardimage={Firstimage}
            />
            <AppGroup1
              title="2" 
              subtitle="Domains" 
              status="18.25%"
              icon={<ExpandMoreIcon />} 
              cardimage={Firstimage}
            />
            <AppGroup1
              title="465k" 
              subtitle="Users" 
              status="10.24%" 
              icon={<ExpandMoreIcon />} 
              cardimage={Firstimage}
            />
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Widget
            bodyClass={classes.mainChartBody}
            header={
              <div className={classes.mainChartHeader}>
                <div className={classes.mainChartHeaderLabels}>
                  <Typography
                    variant="h5"
                    color="text"
                    colorBrightness="secondary"
                  >
                    Unique Visits Over Time
                  </Typography>
                  <div className={classes.d_flex}>
                    <div className={classes.mainChartHeaderLabel}>
                      <Dot color="primary" />
                      <Typography className={classes.mainChartLegentElement}>
                        New Users
                      </Typography>
                    </div>
                    <div className={classes.mainChartHeaderLabel}>
                      <Dot color="primary" />
                      <Typography className={classes.mainChartLegentElement}>
                        Returning Users
                      </Typography>
                    </div>
                  </div>
                </div>
                <Select
                  value={mainChartState}
                  onChange={e => setMainChartState(e.target.value)}
                  input={
                    <OutlinedInput
                      labelWidth={0}
                      classes={{
                        notchedOutline: classes.mainChartSelectRoot,
                        input: classes.mainChartSelect,
                      }}
                    />
                  }
                  autoWidth
                >
                  <MenuItem value="daily">Daily</MenuItem>
                  <MenuItem value="weekly">Weekly</MenuItem>
                  <MenuItem value="monthly">Monthly</MenuItem>
                </Select>
              </div>
            }
          >
            <ResponsiveContainer width="100%" minWidth={500} height={350}>
              <ComposedChart
                margin={{ top: 0, right: -15, left: -15, bottom: 0 }}
                data={mainChartData}
              >
                <YAxis
                  ticks={[0, 500, 1000, 1500, 2000, 2500]}
                  tick={{ fill: theme.palette.text.hint + "80", fontSize: 14 }}
                  stroke={theme.palette.text.hint + "80"}
                  tickLine={false}
                />
                <XAxis
                  tickFormatter={i => i + 1}
                  tick={{ fill: theme.palette.text.hint + "80", fontSize: 14 }}
                  stroke={theme.palette.text.hint + "80"}
                  tickLine={false}
                />
                <Line
                  type="line"
                  dataKey="returnuser"
                  stroke={theme.palette.primary.main}
                  strokeWidth={2}
                  dot={false}
                  activeDot={false}
                />
                <Line
                  type="line"
                  dataKey="newuser"
                  stroke={theme.palette.primary.main}
                  strokeWidth={2}
                  dot={false}
                  activeDot={false}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </Widget>
        </Grid>
        <Grid item xs={12}>
          <Card className={classes.d_flex}>
            <UserGroup 
              title="5.653" 
              subtitle="Existing Users" 
              status="22.45%" 
              icon={<ExpandLessIcon />} 
            />
            <UserGroup 
              title="1.650" 
              subtitle="New Users" 
              status="15.34%" 
              icon={<ExpandLessIcon />} 
            />
            <UserGroup1
              title="9.504" 
              subtitle="Total Visits" 
              status="18.25%"
              icon={<ExpandMoreIcon />} 
            />
            <UserGroup1
              title="5.423" 
              subtitle="Unique Visits" 
              status="10.24%"
              icon={<ExpandMoreIcon />} 
            />
            <UserGroup1
              title="128k" 
              subtitle="Active Users" 
              status="10.24%"
              icon={<ExpandMoreIcon />} 
            />
            <UserGroup1
              title="128k" 
              subtitle="Active Users" 
              status="10.24%"
              icon={<ExpandMoreIcon />} 
            />
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.topapp}>
            Top Downloaded apps
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

// #######################################################################
function getRandomData(length, min, max, multiplier = 10, maxDiff = 10) {
  var array = new Array(length).fill();
  let lastValue;

  return array.map((item, index) => {
    let randomValue = Math.floor(Math.random() * multiplier + 1);

    while (
      randomValue <= min ||
      randomValue >= max ||
      (lastValue && randomValue - lastValue > maxDiff)
    ) {
      randomValue = Math.floor(Math.random() * multiplier + 1);
    }

    lastValue = randomValue;

    return { value: randomValue };
  });
}

function getMainChartData() {
  var resultArray = [];
  var newuser = getRandomData(31, 500, 1500, 2500, 1000);
  var returnuser = getRandomData(31, 500, 1500, 1000, 1500);

  for (let i = 0; i < newuser.length; i++) {
    resultArray.push({
      newuser: newuser[i].value,
      returnuser: returnuser[i].value,
    });
  }

  return resultArray;
}
