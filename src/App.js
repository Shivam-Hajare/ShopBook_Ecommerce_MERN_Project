import './App.css';
import NavBar from "./components/NavBar/NavBar"
import Footer from './components/Footer/Footer';
import React from 'react';
import { Outlet } from 'react-router-dom';
import useInternetCheck from './components/utility/useInternetCheck';
function App() {
  const isOnline=useInternetCheck();
  if(!isOnline)
  {
    return  <div className='container'>
    <p>Turn on/off your Wi-Fi to see what happens</p>
    {isOnline ? (
      <h1 className='online'>You Are Online</h1>
    ) : (
      <h1 className='offline'>You Are Offline</h1>
    )}
  </div>
  }
  return (
    <>
      <NavBar/>
      <Outlet/>
      <Footer/> 
    </>
  );
}

export default App;
