const { ADD_TO_CART, REMOVE_FROM_CART } = require("../actions/cartAction");

const initialState = {
    cart:[],
    products: [
        {name: "Lenovo", id: 1},
        {name: "HP", id: 2},
        {name: "Dell", id: 3},
        {name: "Asus", id: 4},
        {name: "Toshiba", id: 5},
        {name: "Dcl", id: 6}
    ]
}

const cartReducers = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART :
                // cart:[...state.cart, action.id]
                const newId = action.id;
                const newCart = [...state.cart, newId];
                return {products: state.products, cart:newCart}
       
        case REMOVE_FROM_CART:
                const id = action.id;
                const remainingCart = state.cart.filter(item => item !== id);
                return {products: state.products, cart: remainingCart};      
        default:
            return state;
    }
}

export default cartReducers;


