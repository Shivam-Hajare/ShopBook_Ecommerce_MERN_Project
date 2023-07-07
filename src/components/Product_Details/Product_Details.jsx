import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Product_Details.css"
import Shimmer from '../Shimmer/Shimmer'
//redux
import { addItem ,addQuantity} from '../utility/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import Rating from '../Rating/Rating'
import { Store } from '@reduxjs/toolkit'

const Product_Details = () => {
  const [productId, setProduct_id] = useState(null);
  const { id } = useParams();

  //console.log(product[0].id);
  //const _id = id - 1;

  const getProductById=async()=>{
    try{
      const res = await fetch(`/product/${id}`);
      const data = await res.json();
      
      console.log(data[0]);
      setProduct_id(data[0]);
      console.log(productId);

    }catch(err)
    {
      console.log("aloo"+err);
    }
  }
  
  //redux dispatch action
  const dispatch = useDispatch();
  const cartItems = useSelector(store => store.cart.items);
  const handleAddToCart = () => {
    //Add one item only one time ..if try to add same item then its quantity increases
    var flag=0;
   for(var i=0;i<cartItems.length;i++)
   {
    if(cartItems[i].id===productId.id)
    {
      flag=1;
      break;
    }
    else
    flag=0;
   }
    if(flag===0)
    dispatch(addItem(productId));//dispatch action and add payload (here additem comming from reducer)
    else
    dispatch(addQuantity(productId.id));
  }
  useEffect(() => {
    getProductById();
    console.log(productId);
  },[]);
  
  return (!productId) ? <Shimmer /> : (
    <>
      <div className="productContainer">
        <div>
          <div className="carousel">
            <ul className="slides">
              <input type="radio" name="radio-buttons" id="img-1" defaultChecked />
              <li className="slide-container">
                <div className="slide-image">
                  <img src={`https://i.dummyjson.com/data/products/${productId.id}/thumbnail.jpg`} alt="" />
                </div>
                <div className="carousel-controls">
                  <label htmlFor="img-3" className="prev-slide">
                    <span>&lsaquo;</span>
                  </label>
                  <label htmlFor="img-2" className="next-slide">
                    <span>&rsaquo;</span>
                  </label>
                </div>
              </li>
              <input type="radio" name="radio-buttons" id="img-2" />
              <li className="slide-container">
                <div className="slide-image">
                  <img src={`https://i.dummyjson.com/data/products/${productId.id}/1.jpg`} alt="" />
                </div>
                <div className="carousel-controls">
                  <label htmlFor="img-1" className="prev-slide">
                    <span>&lsaquo;</span>
                  </label>
                  <label htmlFor="img-3" className="next-slide">
                    <span>&rsaquo;</span>
                  </label>
                </div>
              </li>
              <input type="radio" name="radio-buttons" id="img-3" />
              <li className="slide-container">
                <div className="slide-image">
                  <img src={`https://i.dummyjson.com/data/products/${productId.id}/2.jpg`} alt="" />
                </div>
                <div className="carousel-controls">
                  <label htmlFor="img-2" className="prev-slide">
                    <span>&lsaquo;</span>
                  </label>
                  <label htmlFor="img-1" className="next-slide">
                    <span>&rsaquo;</span>
                  </label>
                </div>
              </li>

              <input type="radio" name="radio-buttons" id="img-4" />
              <li className="slide-container">
                <div className="slide-image">
                  <img src={`https://i.dummyjson.com/data/products/${productId.id}/3.jpg`} alt="" />
                </div>
                <div className="carousel-controls">
                  <label htmlFor="img-2" className="prev-slide">
                    <span>&lsaquo;</span>
                  </label>
                  <label htmlFor="img-1" className="next-slide">
                    <span>&rsaquo;</span>
                  </label>
                </div>
              </li>
              <div className="carousel-dots">
                <label htmlFor="img-1" className="carousel-dot" id="img-dot-1"></label>
                <label htmlFor="img-2" className="carousel-dot" id="img-dot-2"></label>
                <label htmlFor="img-3" className="carousel-dot" id="img-dot-3"></label>
              </div>
            </ul>
          </div>
        </div>
        <div className="pro_details">

          <div className="brand_caagery">
            <h4>Category: {productId.category}</h4>
            <h4>Brand: {productId.brand}</h4>
          </div>
          <div className="name_price_des"><h1>{productId.title}</h1>
            <h3>$ {productId.price}</h3>
            <div className="rating_stock">
              <h4><Rating rating={productId.rating} /></h4>
              <div className='stock'>{productId.stock >0? <div className="label">In Stock</div>:<div className="">Out of Stock</div>} </div>
            </div>
            <p>{productId.description}</p>
            <div className="btmPro_details">
              <button onClick={handleAddToCart}>Add TO Cart</button>
              <button>Buy Now</button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Product_Details;