import React from 'react';

const Product = (props) => {
    const {addToCart} = props;
    return (
        <div style={{border: "2px solid tomato", padding:"5px", margin:"5px"}}>
           <h5>{props.product.name}</h5> 
           <button onClick={()=> addToCart(props.product.id)}>Add to Cart</button>
        </div>
    );
};

export default Product;