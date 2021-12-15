import './Card.modules.css';
import {useDispatch} from "react-redux";

function Card(props) {
    const dispatch = useDispatch();
    return (
       <div className={['product']}>
            <img alt='' src = {props.img} className={['product__photo']}/>
            <h2 className={['product__name']}>{props.tittle}</h2>
            <p className={['product__description']}>{props.description}</p>
            <h2 className={['product__sum']}>{props.price}</h2>
            <span>₽ /  </span>
            <h2 className={['product__weight']}>{props.weight}г.</h2>
            <button onClick={() => dispatch({ type: 'products/addProduct', payload: { title: props.title, img: props.img, price: parseInt(props.price) } })} className={['product__button']}>+</button>
       </div>
);
}
export {Card};
