import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react'
import Sidebar from "./header/Sidebar";

const Layout = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
        
      <div>
        <Sidebar />
        
      </div>
      <Outlet />
    </>
  )
};

export default Layout;