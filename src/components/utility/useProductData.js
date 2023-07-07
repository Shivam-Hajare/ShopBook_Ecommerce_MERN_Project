import { useEffect,useState } from 'react'
import axios from 'axios';
const useProductData = () => {
    const [product,setProduct] = useState([]);
    
  useEffect(()=>{
    getProducts();
  },[])
  async function getProducts(){
    try{
      const ApiData = await axios.get('/api/products');
     // console.log(ApiData.data);
      setProduct(ApiData.data);
    }catch(error)
    {
      console.log(error);
    }
  }
  return product;
}

export default useProductData