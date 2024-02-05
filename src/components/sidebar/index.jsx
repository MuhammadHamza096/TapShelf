import "./sidebar.scss";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import InventoryIcon from "@mui/icons-material/Inventory";
import StoreIcon from "@mui/icons-material/Store";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import React from "react";
import { Box, Drawer } from "@mui/material";

const drawerWidth = 240;
const Sidebar = ({
  window,
  handleDrawerTransitionEnd,
  handleDrawerClose,
  mobileOpen,
}) => {
  const location = useLocation();
  const drawer = (
    <div className="sidebar">
      <div className="sidebar-logo">TapShelf</div>
      <div className="sidebar-body">
        <ul>
          <li className={location.pathname === "/" ? "active" : ""}>
            <div className="sidebar-content">
              <div className="sidebar-icon">
                <HomeIcon />
              </div>
              <Link to="/">Dashboard</Link>
            </div>
          </li>
          <li className={location.pathname === "/inventory" ? "active" : ""}>
            <div className="sidebar-content">
              <div className="sidebar-icon">
                <InventoryIcon className="sidebar-icon" />
              </div>
              <Link to="/inventory">Inventory</Link>
            </div>
          </li>
          <li className={location.pathname === "/reports" ? "active" : ""}>
            <div className="sidebar-content">
              <div className="sidebar-icon">
                <AssessmentIcon className="sidebar-icon" />
              </div>
              <Link to="/reports">Reports</Link>
            </div>
          </li>
          <li className={location.pathname === "/suppliers" ? "active" : ""}>
            <div className="sidebar-content">
              <div className="sidebar-icon">
                <AccountCircleIcon />
              </div>
              <Link to="/suppliers">Suppliers</Link>
            </div>
          </li>
          <li className={location.pathname === "/orders" ? "active" : ""}>
            <div className="sidebar-content">
              <div className="sidebar-icon">
                <FileCopyIcon />
              </div>
              <Link to="/orders">Orders</Link>
            </div>
          </li>
          <li className={location.pathname === "/store" ? "active" : ""}>
            <div className="sidebar-content">
              <div className="sidebar-icon">
                <StoreIcon />
              </div>
              <Link to="/store">Manage store</Link>
            </div>
          </li>
        </ul>
      </div>
      <div className="sidebar-footer">
        <ul>
          <li>
            <div className="sidebar-content">
              <div className="sidebar-icon">
                {" "}
                <SettingsIcon />
              </div>
              <Link to="/store">Settings</Link>
            </div>
          </li>
          <li>
            <div className="sidebar-content">
              <div className="sidebar-icon">
                <LogoutIcon />
              </div>
              <Link to="/store">Logout</Link>
            </div>
          </li>
        </ul>
      </div>

      {/*  */}
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
