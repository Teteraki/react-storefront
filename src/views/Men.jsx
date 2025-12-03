import { HeroBanner } from "../components/HeroBanner";
import { CategoryContainer } from "../components/categories/CategoryContainer";


export const Men = ({ products, loading, error }) => {
  return (
    <>
      <HeroBanner
        header="Shop the latest fits for him."
        subtext="Premium streetwear, everyday essentials, and gear built for movement."
        anchorText="Browse Men’s"
        href="/browse/Mens" 
        videoURL="https://cdn.pixabay.com/video/2023/05/15/163117-827112884_large.mp4"
      />
      <CategoryContainer
        gender="Mens" categories={[...new Set(products.map((p) => p.category))]}
      />
    </>
  );
};
