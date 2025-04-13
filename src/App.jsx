import React from 'react'
import LoginPage from './components/Login/LoginPage'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from './Components/Dashboard/Dashboard';
import Dashboard from './components/Dashboard/Dashboard';
import Layout from './components/Layout_Compinents/Layout';
import CRM from './components/Dashboard/CRM';
import Footer from './components/Dashboard/Footer/Footer';

export default function App() {

  return (
    
   
      // <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/CRM" element={<CRM />} />
          {/* <Footer /> */}
          
        </Route>
        
        <Route path="login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>

   
      // </>
    
  )
}
