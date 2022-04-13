import { useState } from 'react';
import './filterProduct.css';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

const FilterProducts = () => {
    const [searchProduct, setSearchProduct] = useState('');
    const [isStockOnly, setChecked] = useState(false);
    
    const handleCheckedBox = (isStockOnly) =>{
        setChecked(isStockOnly);
    }
    const handleSearchProduct =(e) =>{
        setSearchProduct(e.target.value);
    }
    return(
        <div className='product-container'>
            <div className="filter-products">
                <h4>Filter Products</h4>
                <SearchBar isStockOnly={isStockOnly} handleChecked={handleCheckedBox}
                searchProduct={searchProduct} handleSearchProduct={handleSearchProduct}/>
                <ProductTable products={PRODUCTS} searchProduct={searchProduct} isStockOnly={isStockOnly}/>
            </div>
        </div>
    )
}
export default FilterProducts;

const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus'}
];