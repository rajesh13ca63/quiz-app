import ProductCategory from "./ProductCategory";
import ProductList from "./ProductList";

const ProductTable = ({products, searchProduct, isStockOnly }) => {
    let lastcategory = null;
    const rows = [];
    products.forEach(product => {
        if(product.name.toLowerCase().indexOf(searchProduct.toLowerCase()) === -1) {
            return;
        }
        if(isStockOnly && !product.stocked) {
            return;
        }
        if(product.category !== lastcategory) {
            rows.push(
                <ProductCategory category={product.category} key={product.category} />
            );
        }
        rows.push(
            <ProductList product={product} key={product.name} />
        )
        lastcategory = product.category;
    });
    console.log('Rows length', rows);
    return(
        <div>
            <h5>Product Lists</h5>
            <table style={{width:"100%"}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable;