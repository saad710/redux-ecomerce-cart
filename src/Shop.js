import React from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import { addToCart } from './redux/actions/cartAction';

const Shop = (props) => {
    console.log(props);
    // const products = [
    //     {name: "Lenovo", id: 1},
    //     {name: "HP", id: 2},
    //     {name: "Dell", id: 3},
    //     {name: "Asus", id: 4},
    //     {name: "Toshiba", id: 5},
    //     {name: "Dcl", id: 6}
    // ]
    const {products, addToCart} = props;
    return (
        <div>
            <h1>This is Shop</h1>
            {
                products.map(pd => 
                <Product 
                key = {pd.id} 
                product = {pd}
                addToCart = {addToCart}
                ></Product>)
            }
            
        </div>
    );
};

const mapStateToProps = state => {
    return{
        cart: state.cart,
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart : addToCart
}

// const connectToStore = connect (
//     mapStateToProps,
//     mapDispatchToProps
// )


export default connect(mapStateToProps, mapDispatchToProps)(Shop);