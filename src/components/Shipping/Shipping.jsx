import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie"
import { useDispatch } from 'react-redux'
import { addShippingData } from '../utility/shippingInfoSlice';
import { useSelector } from 'react-redux';
import store from '../utility/store';
import "./Shipping.css"
const Shipping = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //to react from redux store
	const shippingInfo = useSelector(store => store.shipping.shippingData);
  //console.log("shiipind data is:"+shippingInfo.fullname);
  const [shippingData,setShippingData]=useState(
  {
    fullname:shippingInfo.fullname||"",
    address:shippingInfo.address||"",
    city:shippingInfo.city||"",
    postalcode:shippingInfo.postalcode||"",
    country:shippingInfo.country||""
  }
)
var name,value;
const handleInputs=(e)=>{
  name=e.target.name;
  value=e.target.value;

  setShippingData({...shippingData,[name]:value})
}
const handleSubmit=async(e)=>{
  await e.preventDefault();
const {fullname,address,city,postalcode,country}=shippingData;


dispatch(addShippingData(shippingData))

localStorage.setItem(
  'shippingAddress',
  JSON.stringify({
    fullname,
    address,
    city,
    postalcode,
    country,
  })
);
navigate("/placeOrder")
}


	const [cookies, setCookies] = useCookies(["access_token"]);
	
  useEffect(()=>{
    if(!cookies.access_token)
      navigate("/signin?redirect=/shipping")
  },[cookies.access_token,navigate])


  return (
    <>
    <h1 className='shipping_title'>Shipping Information</h1>
    <form onSubmit={handleSubmit} className='Shipping_form'>
      <label htmlFor="fullname">Full Name:</label>
      <input type="text" id="fullname" name="fullname" onChange={handleInputs} value={shippingData.fullname}/>

      <label htmlFor="address">Address:</label>
      <input type="text" id="address" name="address" onChange={handleInputs} value={shippingData.address}/>

      <label htmlFor="city">City:</label>
      <input type="text" id="city" name="city" onChange={handleInputs} value={shippingData.city}/>

      <label htmlFor="postalcode">Postal Code:</label>
      <input type="text" id="postalcode" name="postalcode" onChange={handleInputs} value={shippingData.postalcode}/>

      <label htmlFor="country">Country:</label>
      <input type="text" id="country" name="country" onChange={handleInputs} value={shippingData.country}/>

      <button type="submit">Continue</button>
    </form>
    </>
  )
}

export default Shipping