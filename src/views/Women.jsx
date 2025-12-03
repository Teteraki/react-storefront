import { HeroBanner } from "../components/HeroBanner";
import { CategoryContainer } from "../components/categories/CategoryContainer";


export const Women = ({ products, loading, error }) => {
  return (
    <>
      <HeroBanner
        header="Shop the latest fits for her."
        subtext="Premium streetwear, everyday essentials, and gear built for movement."
        anchorText="Browse Women’s"
        href="/browse/Womens" 
        videoURL="https://cdn.pixabay.com/video/2019/12/30/30703-383980330_large.mp4"
      />
      <CategoryContainer
        gender="Womens" categories={[...new Set(products.map((p) => p.category))]}
      />
    </>
  );
};
