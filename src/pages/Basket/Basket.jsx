import {Link, Route, Routes} from "react-router-dom";
import {Main} from "../Main/Main";
import './Basket.modules.css';
import {useDispatch, useSelector} from "react-redux";

function getSum(products) {
    return products.reduce((sum, current) => sum + current.price, 0)
}
function Basket() {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()
    return (
        <div className="basket">
            <div className="tittle">Корзина с выбранными товарами</div>
            <main className="maim">
                {products.map((product, index)=><div className="product">
                    <img src= {product.img} className="product__photo-1"></img>
                    <h2 className="product__name">{product.title}</h2>
                    <h2 className="product__sum">{product.price} ₽</h2>
                    <button onClick={() => dispatch({ type: 'products/removeProduct', payload: { index } })} className="product__button">X</button>
                    </div>)}

            </main>
            <div className="line"></div>
            <div className="price">
                <div className="price__tittle">Заказ на сумму:</div>
                <div className="price__sum">{getSum(products)} ₽</div>
                <button className="price__button">Оформить заказ</button>
            </div>
        </div>

    );
}
export {Basket};