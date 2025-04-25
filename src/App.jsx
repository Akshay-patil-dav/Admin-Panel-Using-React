import React from 'react'
import LoginPage from './components/Login/LoginPage'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from './Components/Dashboard/Dashboard';
// import Dashboard from './components/Dashboard/Dashboard';
import Layout from './components/Layout_Compinents/Layout';
import CRM from './components/Dashboard/CRM';
import Footer from './components/Dashboard/Footer/Footer';
import Add_Product from './components/Product/Add_Product';
import Error404 from './components/EOORPAGE/Error404';

export default function App() {

  return (
    
   
      // <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CRM />} />
          <Route path="/Product" element={<Add_Product />} />
          <Route path="*" element={<Error404 />} />
          {/* <Footer /> */}
          
        </Route>
        
        <Route path="login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>

   
      // </>
    
  )
}
