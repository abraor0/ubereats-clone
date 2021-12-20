import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const ProductCard: React.FC = () => (
  <section>
    <button className="block w-full" type="button">
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
      <div className="mt-3">
        <div className="flex justify-between items-center">
          <h3 className="text-lg">Carl's Jr. (2110 W 7Th St)</h3>
          <span className="bg-neutral-200 text-sm rounded-full p-1">4.7</span>
        </div>
        <p className="text-sm text-neutral-500 text-left">
          $0.99 Fee&nbsp;•&nbsp;  
          <span className="text-neutral-400">20-30min</span>
        </p>
      </div>
    </button>
  </section>
);

export default ProductCard;