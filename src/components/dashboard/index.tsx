import React, { useState } from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../header";
import Footer from "../footer";
import TableData from "../table";
import MyContainer from "../drawer/drawer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1e5288"
    }
  }
});

const Dashboard: React.FC = () => {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]); // state to keep track of active indexes of sidebar items
  const users = 124;
  const regions = 10;
  const districts = 23;
  const wards = 78;

  const handleItemClick = (index: number) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter(i => i !== index)); // deselect item
    } else {
      setActiveIndexes([...activeIndexes, index]); // select item
    }
  };

  return (
    // <ThemeProvider theme={theme}>
      <Grid container direction="column">
      <Header />
        <TableData />
        <Footer />
      </Grid>
    // </ThemeProvider>
  );
};

export default Dashboard;
