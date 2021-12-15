import {Link} from "react-router-dom";
import './Basket.modules.css';
import {useDispatch, useSelector} from "react-redux";
import Back from "../../assets/image/Back.png";

function getSum(products) {
    return products.reduce((sum, current) => sum + current.price, 0)
}
function Basket() {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()
    return (
        <div className="basket">
            <div className="basket-tittle"><Link to='/' >Корзина с выбранными товарами</Link></div>
            <main className="basket-main">
                {products.map((product, index)=>
                    <div className="basket-product">
                        <img alt='logo' src= {product.img} className="basket-product__photo"/>
                        <h2 className="basket-product__name">{product.title}</h2>
                        <h2 className="basket-product__sum">{product.price} ₽</h2>
                        <button onClick={() => dispatch({ type: 'products/removeProduct',
                        payload: { index } })} className="basket-product__button">X</button>
                    </div>)}
            </main>
            <div className="line"/>
            <div className="basket-price">
                <div className="basket-price__tittle">Заказ на сумму:</div>
                <div className="basket-price__sum">{getSum(products)} ₽</div>
                <button className="basket-price__button">Оформить заказ</button>
            </div>
        </div>

    );
}
export {Basket};