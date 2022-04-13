const ProductList = ({product}) => {
    const name = product.stocked ? <span style={{color:"green"}}>{product.name} </span>: 
    <span style={{color:"red"}}>{product.name}</span>
    return(
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    )
}

export default ProductList;