import './Main.modules.css';
import { Link } from 'react-router-dom';
import { content } from '../../content';
import { Card } from '../../components/Card/Card';
import logo from '../../assets/image/Group.svg'
import {useSelector} from "react-redux";

function getSum(products){
    return products.reduce((sum, current) => sum+current.price, 0)
}
function Main() {
    const products = useSelector(state => state.products)
    return (
        <div className={'wrapper'}>
            <header className={'header'}>
                <h1 className={['header__tittle']}>наша продукция</h1>
                <div className={['header__info']}>
                    <div className={['header__info-sum']}>{products.length} товара <br/>на сумму {getSum(products)} ₽</div>
                    <div className={['header__info-icon']}/>
                    <Link to='/Basket' className={['header__info-link']}><img src={logo} alt='logo'/></Link>
                </div>
            </header>
            <main className={'products'}>
                <div className={['product-list']}>
                    {content.map(item => (
                    <Card
                        img={item.img}
                        tittle={item.tittle}
                        description={item.description}
                        price={item.price}
                        weight={item.weight}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}
export {Main};
