import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const FavoriteButton: React.FC<propsWithClass> = ({ className = '' }) => (
  <button type="button" className={`group bg-neutral-100 rounded-full p-2 ${className}`} title="Add to favorites">
    <AiOutlineHeart className="text-black group-hover:hidden" />
    <AiFillHeart className="hidden text-black group-hover:block" />
  </button>
);

export default FavoriteButton;