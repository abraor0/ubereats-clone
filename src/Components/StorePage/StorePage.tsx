import StorePageCard from './StorePageCard';
import ProductSection from './ProductSection';
import Wrapper from '../UI/Wrapper';
import dataResponse from '../../starbucks_store.json';  

const StorePage: React.FC = () => {
  const { data } = dataResponse as any;
  const sectionUuid = data.sections[0].uuid;
  const sectionMap: any = data.catalogSectionsMap[sectionUuid];

  return (
    <main className="min-h-screen mt-2 mb-24">
      <StorePageCard data={data}/>
      <Wrapper>
        {sectionMap.map((subsection: any) => 
          <ProductSection data={{storeTitle: data.title, ...subsection}} key={subsection.catalogSectionUUID} />
        )}
      </Wrapper>
    </main>
  );
}

export default StorePage;