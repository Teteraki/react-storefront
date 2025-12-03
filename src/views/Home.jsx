import { CategoryContainer } from "../components/categories/CategoryContainer";
import { HeroBanner } from "../components/HeroBanner";
import { ProductContainer } from "../components/products/ProductContainer";

export const Home = ({ products, loading, error }) => {
  return (
    <>
      <HeroBanner header="Shop the latest fits." subtext="Curated streetwear and essentials for every day life."
        anchorText="Browse Apparel" href="/browse" videoURL={"https://cdn.pixabay.com/video/2024/04/29/209895_large.mp4"} //https://cdn.pixabay.com/video/2023/05/15/163117-827112884_large.mp4 mens
        // women https://cdn.pixabay.com/video/2019/12/30/30703-383980330_large.mp4
      />

      <ProductContainer
        products={products.slice(0, 14)}
        error={error}
        loading={loading}
        itemsPerPage={4}
        containerTitle={"Featured Apparel"}
      />
      <CategoryContainer
        categories={[...new Set(products.map((p) => p.category))]}
      />
    </>
  );
};
