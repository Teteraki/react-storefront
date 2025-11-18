import { BrowseCategories } from "../components/BrowseCategories";
import { HeroBanner } from "../components/HeroBanner";
import { ProductContainer } from "../components/ProductContainer";

export const Home = ({ products, loading, error }) => {
  return (
    <>
      <HeroBanner />

      <ProductContainer
        products={products.slice(0, 14)}
        error={error}
        loading={loading}
        itemsPerPage={4}
        containerTitle={"Featured Apparel"}
      />
      <BrowseCategories
        categories={[...new Set(products.map((p) => p.category))]}
      />
    </>
  );
};
