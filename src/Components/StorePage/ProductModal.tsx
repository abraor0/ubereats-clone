import ReactDOM from 'react-dom';
import ScreenOverlay from '../UI/ScreenOverlay';
import Button from '../UI/Button';
import { GrClose } from 'react-icons/gr';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useState } from 'react';
import { useCartContext } from '../context/CartContext';
import { formatPrice } from '../../utils';

type ProductModalProps = {
  hideDetails: () => void;
  data: any;
};

const ProductModal: React.FC<ProductModalProps> = ({ data, hideDetails }) => {
  const [ orderAmount, setOrderAmount ] = useState(1);
  
  const increaseAmount = () => setOrderAmount(prevAmount => prevAmount + 1);
  const decreaseAmount = () => setOrderAmount(prevAmount => prevAmount === 1 ? prevAmount : prevAmount - 1);

  const { dispatchCartState } = useCartContext();

  const addOrderToCart = () => {
    dispatchCartState({
      type: 'add',
      storeTitle: data.storeTitle,
      val: {
        title: data.title,
        unitValue: data.price,
        quantity: orderAmount
      }
    });
    hideDetails();
  };
  console.log(data);

  return (
    <>
      <ScreenOverlay stateAction={hideDetails} />
      {ReactDOM.createPortal(
        <section className="fixed left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 bg-white w-[650px]">
          <div className="relative">
            <button onClick={hideDetails} className="bg-white absolute p-3 text-xl rounded-full top-2 left-2">
              <GrClose />
            </button>
            <img className="w-full h-[400px] object-cover" src={data.imageUrl} alt="hotdog" />
          </div>
          <div className="px-6 py-8">
            <h3 className="text-3xl mb-2">{data.title}</h3>
            <p className="text-neutral-500">{data.itemDescription}</p>
            <p className="text-neutral-500 mt-5 text-sm">{data.priceTagline.text.match('[0-9]+ Cal')[0]}</p>
          </div>
          <div className="flex px-6 py-8 border-t border-black/20">
            <button className="bg-neutral-200 p-3 text-2xl rounded-full mr-5 " onClick={decreaseAmount}><AiOutlineMinus /></button>
            <span className="flex items-center justify-center font-light">{orderAmount}</span>
            <button className="bg-neutral-200 p-3 text-2xl rounded-full mx-5" onClick={increaseAmount}><AiOutlinePlus /></button>
            <Button className="overrides:rounded-none flex-1 text-[18px] overrides:py-4 flex justify-center items-center" onClick={addOrderToCart}>
              <span className="flex-1">Add {orderAmount} to order</span>
              <span className="font-light text-base">{formatPrice(data.price * orderAmount)}</span>
            </Button>
          </div>
        </section>, 
        document.getElementById('reactModalPortal') as Element)
      }
    </>
  );
}

export default ProductModal;