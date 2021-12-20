import ProductCard from './ProductCard';

const ProductSuggestion: React.FC = () => {
  return (
    <section>
      <h2 className="text-4xl font-bold mb-6">Today's offers</h2>
      <ul className="grid grid-cols-3 gap-x-7 gap-y-10">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ul>
    </section>
  );
};

export default ProductSuggestion;