import Button from '../UI/Button';
import { BsCartFill } from 'react-icons/bs';

const CartButton: React.FC = () => {
  return (
    <Button className="flex gap-3 items-center">
        <BsCartFill className="text-base" />Cart • 0
    </Button>  
  );
};

export default CartButton;