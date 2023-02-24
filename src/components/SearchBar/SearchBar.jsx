import React, { useState } from 'react'
import "./SearchBar.css"
const SearchBar = (props) => {
    const [searchProduct,setSearchProduct]=useState("")
    const handleChange=(e)=>{
        setSearchProduct(e.target.value)
    }
    const onTrigger = (e) => {
        e.preventDefault();
        props.parentCallback(searchProduct);
        
    }
   // props.seasearchText(searchProduct);
    return (
        <>
            <form action="" className="searchBarForm" onSubmit = {onTrigger}>
                <input value={searchProduct} onChange={handleChange} type="search" name="" id="" placeholder='Seach Products' />
                <button>Search</button>
            </form>
        </>
    )
}

export default SearchBar