import { useEffect,useState } from 'react'
const useProductData = () => {
    const [product,setProduct] = useState([]);
    
  useEffect(()=>{
    getProducts();
  },[])
  async function getProducts(){
    try{
      const ApiData = await fetch('https://dummyjson.com/products');
      const json=await ApiData.json();
      setProduct(json.products);
    }catch(error)
    {
      console.log(error);
    }
  }
  return product;
}

export default useProductData