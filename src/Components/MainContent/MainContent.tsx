import Wrapper from '../UI/Wrapper';
import MainContentFilter from './MainContentFilter';
import ProductSuggestion from './ProductSuggestion';

const MainContent: React.FC = () => {
  return (
    <Wrapper className="flex gap-x-32 my-32">
      <MainContentFilter />
      <main className="flex-grow">
        <ProductSuggestion />
      </main>
    </Wrapper>
  );
};

export default MainContent;