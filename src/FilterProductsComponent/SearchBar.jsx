import { useState } from "react";

const SearchBar = ({isStockOnly, handleChecked, searchProduct, handleSearchProduct}) => {
    return (
        <div className="search-bar">
            <h3>Search Producs</h3>
            <input type="text" value={searchProduct}
            onChange={(e) => handleSearchProduct(e)}/>
            <div className="check-box">
                <input type="checkbox" defaultChecked={isStockOnly} 
                onChange={()=>handleChecked(!isStockOnly)}/>
                <span style={{color: "brown"}}>Only show product in stock</span>
            </div>
        </div>
    )
}

export default SearchBar;