import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import SearchBar from '../SearchBar/SearchBar'
import "./Body.css"
import Shimmer from '../Shimmer/Shimmer.jsx'
import { Link } from 'react-router-dom'
const Body = () => {
  const [products,setProducts] = useState([]);
  const [filteredProduct,setfilteredProduct]=useState([]);
  const [searched,setSearched]=useState("")
  const searchText=(Sdata)=>{
    console.log(Sdata);
    setSearched(Sdata);
    getfilteredData(Sdata,products);
  }
  const getfilteredData=(searchProduct,products)=>{
    const filteredProductData=products.filter((product)=>{
      return product?.title?.toLowerCase().includes(searchProduct?.toLowerCase());
    });
    console.log(filteredProductData);
    setfilteredProduct(filteredProductData);
  }
  useEffect(()=>{
    getProducts();
  },[])
  async function getProducts(){
    try{
      const ApiData = await fetch('https://dummyjson.com/products');
      const json=await ApiData.json();
      //console.log(json.products);
      setProducts(json.products);
      setfilteredProduct(json.products);
    }catch(error)
    {
      console.log(error);
    }
  }//? optional channing
  return (products?.length===0)?<Shimmer/>:  (
    <>
    <SearchBar parentCallback={searchText}/>
    <div className='cardContainer'>
        {
          filteredProduct?.map((product)=>{
            return <Link to={`/product_details/${product.id}`}><ProductCard data={product} key={product.id}/></Link> 
          })
        }
    </div>
    </>
  )
}

export default Body;