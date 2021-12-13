import {createStore} from "redux";

function productsReducer(state = { products: [] }, action) {
    switch (action.type) {
        case 'products/addProduct':
            return { products: [...state.products, action.payload] }
        case 'products/removeProduct':

            return { products: [...state.products.slice(0, action.payload.index), ...state.products.slice(action.payload.index + 1)] }
        default:
            return state
    }
}
const store = createStore(productsReducer);
export {store}