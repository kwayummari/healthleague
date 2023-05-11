import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
import { useState } from 'react';

function MyContainer() {
    const [drawerOpen, setDrawerOpen] = useState(true);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  
  return (
    <div className="col-4">
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
        <List>
          <ListItem button selected>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button selected>
            <ListItemIcon>
              <SportsFootballIcon />
            </ListItemIcon>
            <ListItemText primary="League" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
 export default MyContainer;