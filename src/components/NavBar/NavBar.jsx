import React from 'react'
import "./NavBar.css"
import { Link, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useCookies } from 'react-cookie'
import { useDispatch } from 'react-redux'
import { removeShippingData } from '../utility/shippingInfoSlice'
const NavBar = () => {
  const cartItem = useSelector(store => store.cart.items)//only subscribe to cartSlice..id not every time store changes it will rerender;
  const shippingInfo = useSelector(store => store.shipping.shippingData);
  const dispatch = useDispatch();
  const [cookies, setCookies] = useCookies(["access_token"]);
  var userid="";
  if(cookies.access_token)
  {
    userid=localStorage.getItem('userID');
    console.log(userid);
  }
  const logout=async(e)=>{
    await e.preventDefault();
    setCookies("access_token","");
    window.localStorage.removeItem("userID");
    window.localStorage.removeItem("shippingAddress");
    dispatch(removeShippingData(shippingInfo))
    Navigate("/")
  }
  return (
    <div className='NavBar'>
      <Link to="/"><img src="/logo.jpg" alt="" /></Link>

      <div className="nav_items">
        <ul>
          <Link to="/">Home</Link>
          {!cookies.access_token ? (
            <>
              <Link to="/signIn">SignIn</Link>
              <Link to="/signUp">SignUp</Link>
            </>
          ) :
            (
              <nav className="nav-dropdown">
              <ul>
                <li className="link-container">
                  <Link href="#">Options</Link>
                  <ul className="sub-links">
                    <li><Link to="/profile">User Profile</Link></li>
                    <li><Link to="/orderHistory">Order History</Link></li>
                    <li><Link onClick={logout}>Sign Out</Link></li>
                  </ul>
                </li>
              </ul>
            </nav>
            )
          }
          <Link to="/cart">Cart-{cartItem.length} items</Link>
        </ul>
      </div>
    </div>

  )
}

export default NavBar