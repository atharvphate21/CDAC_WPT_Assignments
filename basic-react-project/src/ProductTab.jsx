import "./Product"
import Product from "./Product"

function ProductTab(){
    let options=["High-tech", "Durable", "Fast"];
    let options2={a:"high-tech", b:"durable", c:"fast"}
    return(
        <>
        <Product title="Car" 
        price="300000/-" 
        features={options}
        features2={options2.a}
        />
        <Product title="Bike" 
        price="100000/-"
        features2={options2.b} 
        />
        <Product title="Bicycles" 
        price="15000/-"
        features3={["high-tech", "durable"]}
        // features4={{c:"fast"}}
        />
        </>
    )
}

export default ProductTab