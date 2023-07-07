import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import store from "../utility/store.js"

import { useCookies } from "react-cookie"
import { useNavigate } from 'react-router-dom';
import "./Cart.css"
//redux
import { removeItem, addQuantity, removeQuantity } from '../utility/cartSlice'
import { useDispatch } from 'react-redux'
const Cart = () => {
	const [cookies, setCookies] = useCookies(["access_token"]);
	const navigate = useNavigate();
	//for adding and reducing quantity of products
	const addQuanity = (id) => {
		dispatch(addQuantity(id));
	}
	const reduceQuantiy = (id) => {
		dispatch(removeQuantity(id))
	}


	//redux dispatch action
	const dispatch = useDispatch();
	//to react from redux store
	const cartItems = useSelector(store => store.cart.items);
	//to remove product
	const removeCartItem = (id) => {
		dispatch(removeItem(id));
	}

	//order summerary
	//sum of prices of product
	var ItemsPriceSum = 0;
	//Product Discount
	var discountedPrice = 0;
	//Product Total
	var TotalSum = 50;

	const checkoutHandler = () => {
		!cookies.access_token ? navigate('/signin?redirect=/shipping') : navigate("/shipping");

	}
	return (
		<>
			<main>
				<div className="container">
					<h1>Shopping Cart</h1>
					<div className="cart">
						<div className="cart-items">
							{
								cartItems.map((product) => {
									ItemsPriceSum = ItemsPriceSum + (product.price * product.quantity);
									discountedPrice = discountedPrice + ((product.price * product.quantity) * (product.discountPercentage / 100))
									TotalSum += ItemsPriceSum - discountedPrice;
									return (
										<div key={product.id} className="cart-item">
											<div className="cart-item-img">
												<img src={product.thumbnail} alt="" />
											</div>
											<div className="cart-item-details">
												<h2>{product.title}</h2>
												<p>Price: {product.price} Rs.</p>
												<div className="quantity_btn">
													<p>Quantity: {product.quantity}</p>
													<button onClick={() => addQuanity(product.id)}><i className="fa-solid fa-plus"></i></button>
													<button onClick={() => reduceQuantiy(product.id)}><i className="fa-solid fa-minus"></i></button>
												</div>
												<button onClick={() => removeCartItem(product.id)} className='remove_btn'>Remove</button>
											</div>
										</div>

									)
								})
							}
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
							<h4>PROMO CODE</h4>
							<div className="promoCodeDiv">
								<div className="proInput">
									<input className='input' type="text" placeholder='Enter your code' />
									<button className='apply_btn'>Apply</button>

								</div>
							</div>
							<div className="cost">
								<h4>TOTAL COST</h4>
								<h4>Rs.{TotalSum.toFixed(2)}</h4>
							</div>
							<button onClick={checkoutHandler} className='checkout_btn'>Proceed to Checkout</button>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}

export default Cart