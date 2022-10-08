import ProductCard from './ProductCard';

interface ProductSectionProps {
  data: any;
}

const ProductSection: React.FC<ProductSectionProps> = ({ data }) => {
  const itemsPayload = data.payload.standardItemsPayload;
  const catalogItems = itemsPayload.catalogItems;
  console.log(data)

  return (
    <section className="mt-14">
      <h2 className="text-2xl font-bold mb-6">{itemsPayload.title.text}</h2>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-x-6 gap-y-10">
        {catalogItems.map((item: any) => 
          <li key={item.uuid}><ProductCard data={{storeTitle: data.storeTitle, ...item}} /></li>
        )}
      </ul>
    </section>
  );
}
export default ProductSection;