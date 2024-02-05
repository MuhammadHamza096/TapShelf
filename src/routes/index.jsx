// Pages
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Dashboard from "../pages/dashboard";
import Inventory from "../pages/inventory";
import ManageStore from "../pages/manageStore";
import Orders from "../pages/orders";
import Reports from "../pages/reports";
import Suppliers from "../pages/suppliers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

const Routing = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const routePaths = [
    {
      name: "dashboard",
      Component: Dashboard,
      path: "/",
    },
    {
      name: "Inventory",
      Component: Inventory,
      path: "/inventory",
    },
    {
      name: "ManageStore",
      Component: ManageStore,
      path: "/store",
    },
    {
      name: "Orders",
      Component: Orders,
      path: "/orders",
    },
    {
      name: "Reports",
      Component: Reports,
      path: "/reports",
    },
    {
      name: "Suppliers",
      Component: Suppliers,
      path: "/suppliers",
    },
  ];

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  return (
    <Router>
      <div className="main-container">
        <Sidebar
          handleDrawerClose={handleDrawerClose}
          mobileOpen={mobileOpen}
          handleDrawerTransitionEnd={handleDrawerTransitionEnd}
        />
        <div className="main-container-right">
          <Navbar toggleSidebar={handleDrawerToggle} />
          <Routes>
            {routePaths.map(({ Component, path }) => {
              return <Route path={path} element={<Component />} />;
            })}
          </Routes>
        </div>
      </div>
    </Router>
  );
};
export default Routing;
