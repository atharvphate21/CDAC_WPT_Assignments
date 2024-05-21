import "./Product.css";

function Product({title, price, features, features2, features3, features4}){
    return(
        <div className="Product">
        <h1>{title}</h1>
        <h3>{price}</h3>
        <p>{features}</p>
        <p>{features2}</p>
        <p>{features3}</p>
        {/* <p>{features4}</p> */}
        </div>
    )
}

export default Product