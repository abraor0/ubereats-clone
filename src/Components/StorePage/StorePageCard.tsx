import Wrapper from '../UI/Wrapper';
import StorePageCardHero from './StorePageCardHero';

interface StorePageCardProps {
  data: any;
};

const StorePageCard: React.FC<StorePageCardProps> = ({ data }) => (
  <section>
    <StorePageCardHero heroImagesUrls={data.heroImageUrls}/>
    <Wrapper className="mt-6">
      <h1 className="text-4xl font-bold">{data.title}</h1>
      <p className="text-sm mt-2">
        {data.rating && <>
          <img className="inline" src="https://d1a3f4spazzrp4.cloudfront.net/static/images/Star_Black_Eats_3.png" alt="star icon" width="14" height="14"/> 
          {data.rating.ratingValue}
          ({data.rating.reviewCount} ratings)
        </>}
        {data.storeInfoMetadata.storeInfoSummary.titleBadge.text}
      </p>  
      <p className="text-sm text-neutral-500" >
        {data.storeInfoMetadata.storeInfoSummary.subtitle1Badge.text}
      </p>
    </Wrapper>
  </section>
);

export default StorePageCard;