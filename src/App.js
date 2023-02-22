import React from 'react';
import './App.css'

import Header from './components/Header';
import Invities from './page/Invities';
// import Masterlist from './page/Masterlist';
// import Login from './components/Login';
function App() {
  return (
    <>
      {/* <Login /> */}
      <Header />
      {/* <Masterlist /> */}
      <Invities />
    </>
  );
}

export default App;