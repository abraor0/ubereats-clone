import FavoriteButton from '../UI/FavoriteButton';

interface StorePageCardHeroProps {
  heroImagesUrls: {
    url: string;
    width: number;
  }[];
};

const StorePageCardHero: React.FC<StorePageCardHeroProps> = ({ heroImagesUrls }) => {
  const srcSet = heroImagesUrls.reduce((str, currImgUrl, index) => {
    return str + `${currImgUrl.url} ${currImgUrl.width}w${index === heroImagesUrls.length - 1 ? '' : ','}`;
  }, '');

  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-start justify-end py-6 px-10">
        <FavoriteButton className="text-xl" /> 
      </div>
      <img className="h-40 w-full object-cover" src={heroImagesUrls[0].url} srcSet={srcSet} alt="food"/>
    </div>
  );
};

export default StorePageCardHero;