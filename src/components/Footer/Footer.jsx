import React, { useContext, useState } from 'react'
import UserContext from '../utility/userContext'


const Footer = () => {
  const {newUser,setNewUser}=useContext(UserContext);
  const handleChange=(e)=>{
    setNewUser({name:e.target.value})
  }
  return (
    <div>
      <input type="text" name="" id="" value={newUser.name} onChange={handleChange} />
      <h3>Created by {newUser.name} and {newUser.email}</h3>
    </div>
  )
}

export default Footer 