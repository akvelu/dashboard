import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

// import Header from './components/Header.jsx';
import Login from './components/Login.jsx';
import Dashboard from './page/Dashboard.jsx';
import Invities from './page/Invities.jsx';
import MainLayout from './page/MainLayout.jsx';
import Masterlist from './page/Masterlist.jsx';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      
        <Route path='/' element={<Login />}/>
        <Route element={<MainLayout />}> 
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/masterlist' element={<Masterlist />}/>
        <Route path='/invities' element={<Invities />}/>  
       </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;