import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';


const StoreImage: React.FC = () => (
  <div className="relative">
    <div className="absolute inset-x-0 top-3 flex justify-between items-center">
      <span className="bg-uber text-white rounded-r-3xl px-3 text-sm py-[2px]">Buy 1, Get 1 free</span>
      <span className="group">
        <AiOutlineHeart className="text-xl text-red-700 group-hover:hidden" title="Add to favorites" />
        <AiFillHeart className="hidden text-xl text-red-700 group-hover:inline" title="Add to favorites" />
      </span>
    </div>
    <img className="h-32 w-full object-cover" src="https://d1ralsognjng37.cloudfront.net/07054042-1709-42bb-96a3-58081611abb0.jpeg" alt="food"/>
  </div>
);

export default StoreImage;