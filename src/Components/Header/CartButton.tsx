import Button from '../UI/Button';
import { BsCartFill } from 'react-icons/bs';
import { useCartContext } from '../context/CartContext';
import { formatPrice } from '../../utils';
import { useState } from 'react';
import { GrClose } from 'react-icons/gr'

const CartButton: React.FC = () => {
  const [ listVisible, toggleListVisible ] = useState(false);

  const showList = () => toggleListVisible(true);
  const hideList = () => toggleListVisible(false);

  const { cartList, dispatchCartState } = useCartContext();

  const { totalPrice, totalQuantity } = cartList.items.reduce((amounts, item) => {
    amounts.totalPrice += item.unitValue * item.quantity;
    amounts.totalQuantity += item.quantity;

    return amounts;
  }, {totalPrice: 0, totalQuantity: 0});

  return (
    <div>
      <Button className="flex gap-3 items-center" onClick={showList}>
          <BsCartFill className="text-base" />Cart • {totalQuantity}
      </Button>  
      <section className={`${listVisible && cartList.items.length > 0 ? '' : 'hidden'} absolute z-20 w-[450px] p-6 -translate-x-[70%] bg-neutral-100 shadow-lg`}>
        <button onClick={hideList} className="text-lg">
          <GrClose />
        </button>
        <p className="text-4xl mt-5">{cartList.storeTitle}</p>
        <ul className="my-4">
          {cartList.items.map((item, index) => (
            <li key={index} className="grid grid-cols-[max-content_1fr_max-content] gap-x-4 py-4 items-center border-b border-black/10 last:border-none">
              <div className="flex gap-x-2">
                <button 
                  type="button" 
                  onClick={() => dispatchCartState({type: 'decrease', val: {...item, quantity: 1}, storeTitle: cartList.storeTitle})}
                  className="text-2xl"
                >-</button>
                <span className="bg-neutral-200 py-2 px-3 rounded-full leading-none">{item.quantity}</span>
                <button 
                  type="button" 
                  onClick={() => dispatchCartState({type: 'add', val: {...item, quantity: 1}, storeTitle: cartList.storeTitle})} 
                  className="text-2xl"
                >+</button>
              </div>
              <p className="">{item.title}</p>
              <span className="font-light">{formatPrice(item.unitValue * item.quantity)}</span>
            </li>
          ))}
        </ul>
        <Button className="overrides:rounded-none w-full overrides:text-lg overrides:py-3">
          Go to Checkout - {formatPrice(totalPrice)}
        </Button>
      </section>
    </div>
  );
};

export default CartButton;