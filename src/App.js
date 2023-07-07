import './App.css';
import NavBar from "./components/NavBar/NavBar"
import Footer from './components/Footer/Footer';
import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import useInternetCheck from './components/utility/useInternetCheck';
import UserContext from './components/utility/userContext';
//redux
import { Provider } from 'react-redux';
import store from './components/utility/store';

import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
 // const {user}=useContext(UserContext);
  
  const [newUser,setNewUser]=useState(
    {
      name:"shivam"
    }
  );
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
    <Provider store={store}>
    <UserContext.Provider value={{newUser:newUser,setNewUser:setNewUser}}>
      <ToastContainer position='top-right' limit={1}/>
      <NavBar/>
      <Outlet/>
      <Footer/> 
    </UserContext.Provider>

    </Provider>
  );
}

export default App;
