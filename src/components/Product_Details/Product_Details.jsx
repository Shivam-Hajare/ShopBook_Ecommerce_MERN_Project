import React from 'react'
import { useParams } from 'react-router-dom'
import "./Product_Details.css"
import Shimmer from '../Shimmer/Shimmer'
import useProductData from '../utility/useProductData'
const Product_Details = () => {
  
  const { id } = useParams();
   const product = useProductData();
  const _id=id-1;

  return (product?.length===0)?<Shimmer/>:(
    <>
      <div className="productContainer">
        <div>
          <div class="carousel">
            <ul class="slides">
              <input type="radio" name="radio-buttons" id="img-1" checked />
              <li class="slide-container">
                <div class="slide-image">
                  <img src={`https://i.dummyjson.com/data/products/${product[_id].id}/thumbnail.jpg`} alt=""/>
                </div>
                <div class="carousel-controls">
                  <label for="img-3" class="prev-slide">
                    <span>&lsaquo;</span>
                  </label>
                  <label for="img-2" class="next-slide">
                    <span>&rsaquo;</span>
                  </label>
                </div>
              </li>
              <input type="radio" name="radio-buttons" id="img-2" />
              <li class="slide-container">
                <div class="slide-image">
                  <img src={`https://i.dummyjson.com/data/products/${product[_id].id}/1.jpg`} alt="" />
                </div>
                <div class="carousel-controls">
                  <label for="img-1" class="prev-slide">
                    <span>&lsaquo;</span>
                  </label>
                  <label for="img-3" class="next-slide">
                    <span>&rsaquo;</span>
                  </label>
                </div>
              </li>
              <input type="radio" name="radio-buttons" id="img-3" />
              <li class="slide-container">
                <div class="slide-image">
                  <img src={`https://i.dummyjson.com/data/products/${product[_id].id}/2.jpg`} alt=""  />
                </div>
                <div class="carousel-controls">
                  <label for="img-2" class="prev-slide">
                    <span>&lsaquo;</span>
                  </label>
                  <label for="img-3" class="next-slide">
                    <span>&rsaquo;</span>
                  </label>
                </div>
              </li>
              
              <input type="radio" name="radio-buttons" id="img-4" />
              <li class="slide-container">
                <div class="slide-image">
                  <img src={`https://i.dummyjson.com/data/products/${product[_id].id}/3.jpg`} alt="" />
                </div>
                <div class="carousel-controls">
                  <label for="img-2" class="prev-slide">
                    <span>&lsaquo;</span>
                  </label>
                  <label for="img-1" class="next-slide">
                    <span>&rsaquo;</span>
                  </label>
                </div>
              </li>
              <div class="carousel-dots">
                <label for="img-1" class="carousel-dot" id="img-dot-1"></label>
                <label for="img-2" class="carousel-dot" id="img-dot-2"></label>
                <label for="img-3" class="carousel-dot" id="img-dot-3"></label>
              </div>
            </ul>
          </div>
        </div>
        <div className="pro_details">

          <div className="brand_caagery">
            <h4>Category: {product[_id].category}</h4>
            <h4>Brand: {product[_id].brand}</h4>
          </div>
          <div className="name_price_des"><h1>{product[_id].title}</h1>
            <h3>$ {product[_id].price}</h3>
            <div className="rating_stock">
            <h4>{product[_id].rating}★</h4>
            <h4>34 stock</h4>
            </div>
            <p>{product[_id].description}</p>
            <div className="btmPro_details">
              <button>Add TO Cart</button>
              <button>Buy Now</button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Product_Details;