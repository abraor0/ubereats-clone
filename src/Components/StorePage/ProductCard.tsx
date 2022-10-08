import { useState } from 'react';
import ProductModal from './ProductModal';

interface ProductCardProps {
  data: any;
};

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const [ showDetails, setShowDetails ] = useState<boolean>(false);

  const hideDetails = () => setShowDetails(false);
  const revealDetails = () => setShowDetails(true);
  const priceTagHtml = { __html: data.priceTagline.textFormat };

  return (
    <section>
      <button className="block w-full p-2 transition-shadow hover:shadow-md group text-left" onClick={revealDetails}>
        <div className="overflow-hidden">
          <img className="h-48 w-full object-cover group-hover:scale-110 [transition-duration:500ms] transition-transform" src={data.imageUrl} alt="" loading="lazy" />
        </div>
        <h3>{data.title}</h3>
        <p className="font-light text-sm" dangerouslySetInnerHTML={priceTagHtml}></p>
      </button>
      {showDetails && <ProductModal data={data} hideDetails={hideDetails}/>}
    </section>
  );
};

export default ProductCard;