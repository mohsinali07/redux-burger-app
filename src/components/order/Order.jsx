import { useDispatch, useSelector } from 'react-redux';
import { updateIngredient } from '../../features/order/orderSlice';
import './Order.css';
import Burger from '../burger/Burger';
import { Link } from 'react-router-dom';

const Order = () => {

    const ingredients = useSelector((state) => state.order.ingredients);
    const totalBill = useSelector((state) => state.order.totalBill);
    const dispatch = useDispatch();

    const handleQuantityChange = (key, operation) => {
        dispatch(
            updateIngredient({
                key: key,
                operation: operation
            })
        );
    };

    return (
      <>
        <Burger />
        <div className='build-control-outer'>
          <span className='mb-2'>
            Current Price:{' '}
            <span className='fw-bold'>${totalBill.toFixed(2)}</span>
          </span>
          {Object.entries(ingredients).map(([key, { name, quantity }]) => (
            <div key={key}>
              <div className='build-control-inner'>
                <span className='build-title'>{name.toUpperCase()}</span>
                <button
                  className='less-btn text-light'
                  disabled={quantity === 0}
                  onClick={() => handleQuantityChange(key, -1)}
                >
                  Less
                </button>
                <button
                  className='more-btn text-light'
                  onClick={() => handleQuantityChange(key, 1)}
                >
                  More
                </button>
              </div>
            </div>
          ))}
          <button className='sign-up-btn' disabled={totalBill === 3.00}>
            <Link className='text-decoration-none sign-up-btn-link' to='login'>
              SIGN UP TO ORDER
            </Link>
          </button>
        </div>
      </>
    );
}

export default Order;
