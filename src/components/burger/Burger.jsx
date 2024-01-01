import BurgerTop from '../../assets/images/burger-top.png';
import BurgerBottom from '../../assets/images/burger-bottom.png';
import { Container } from 'react-bootstrap';
import './Burger.css';
import { useSelector } from 'react-redux';
import Ingredient from '../ingredient/Ingredient';

const Burger = () => {

    const ingredients = useSelector((state) => state.order.ingredients);

    return (
        <div>
            <Container className='mt-5'>
                <div className='burger'>
                    <div className='d-flex justify-content-center align-items-center flex-column'>
                        <img src={BurgerTop} alt='burger-top' className='burger-size mb-1'/>
                        { Object.values(ingredients).map(({name, quantity}) => {
                            return quantity > 0 && (
                                Array.from({ length: quantity }, (_, index) => (
                                    <Ingredient key={index} ingredient={name} />
                                ))
                            );
                        })}
                        { Object.values(ingredients).every((ingredient) => ingredient.quantity === 0) &&
                            <p className='h5 fw-bold'>No Ingredients Added</p>
                        }
                        <img src={BurgerBottom} alt='burger-bottom' className='burger-bt-size mt-1'/>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Burger;
