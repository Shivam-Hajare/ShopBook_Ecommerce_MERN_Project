import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import store from "../utility/store.js"
import { Link } from 'react-router-dom'
import { useCookies } from "react-cookie"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import { clearCart } from '../utility/cartSlice.js'
const OrderDetails = () => {
	const [cookies, setCookies] = useCookies(["access_token"]);
	const navigate = useNavigate();
    const dispatch = useDispatch()
    
  //to react from redux store
	const shippingInfo = useSelector(store => store.shipping.shippingData);
 


	//to react from redux store
	const cartItems = useSelector(store => store.cart.items);
	//console.log("cartItems:"+cartItems[0].id);

	//order summerary
	//sum of prices of product
	var ItemsPriceSum = 0;
	//Product Discount
	var discountedPrice = 0;
	//Product Total
	var TotalSum = 50;
	
    useEffect(()=>{
      if(!cookies.access_token)
        navigate("/signin?redirect=/placeOrder")
    },[cookies.access_token,navigate])
	
	return (
		<>
			<main>
				<div className="container">
					<h1>Order 640d73c3e7cf777775797598</h1>
					<div className="placeOrdercart">
                        <div className="orderPrview">
                            <div className="shippingDiv">
                                <h2>Shipping</h2>
                                <h3>Name:{shippingInfo.fullname||""}</h3>
                                <h3>Address:{shippingInfo.address||""},{shippingInfo.city||""},{shippingInfo.postalcode||""},{shippingInfo.country||""}</h3>
                            </div>
                            <div className="paymentDiv">
                                <h2>Payment</h2>
                                <h3>Method: Cash on Delivery</h3>
                            </div>
                            <div className="ItemsDiv">
                                <h2>Items</h2>
                                {
                                    cartItems.map((product) => {
                                        ItemsPriceSum = ItemsPriceSum + (product.price * product.quantity);
                                        discountedPrice = discountedPrice + ((product.price * product.quantity) * (product.discountPercentage / 100))
                                        TotalSum += ItemsPriceSum - discountedPrice;
                                        return (
                                            <div key={product.id} className="ItemsDiv_cart-item">
                                                <div className="ItemsDiv_cart-item-img">
                                                    <img src={product.thumbnail} alt="" />
                                                </div>
                                                <div className="ItemsDiv_cart-item-details">
                                                    <h2>{product.title}</h2>
                                                    <p>Price: {product.price} Rs.</p>
                                                    <p>Quantity: {product.quantity}</p>
                                                </div>
                                            </div>
    
                                        )
                                    })
                                }
                            </div>
                        </div>
						<div className="cart-summary">
							<h2>Order Summary</h2>
							<div className="cart_items">
								<h4>ITEMS {cartItems.length}</h4>
								<span>{ItemsPriceSum}</span>
							</div>
							<div className='cardShopping'>
								<h4>Shiping</h4>
								<span>Rs.50</span>
							</div>

							<div className='discountdiv'>
								<h4>Discount</h4>
								<span>Rs.{discountedPrice.toFixed(2)}</span>
							</div>
							<div className="cost">
								<h4>TOTAL COST</h4>
								<h4>Rs.{TotalSum.toFixed(2)}</h4>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}

export default OrderDetails