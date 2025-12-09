import { CategoryContainer } from "../components/categories/CategoryContainer";
import { HeroBanner } from "../components/HeroBanner";
import { ProductContainer } from "../components/products/ProductContainer";

/**
 * Home Page Component
 *
 * The landing page of the storefront. Displays a hero banner, featured
 * apparel items, and a category browsing section. Serves as the entry point
 * into the shopping experience.
 *
 * @param {Object} props
 * @param {Array<Object>} props.products - Full product list used to populate
 *   featured items and derive available categories.
 * @param {boolean} props.loading - Indicates whether product data is being fetched.
 * @param {Object|null} props.error - Error object if product fetching fails.
 */

export const Home = ({ products, loading, error }) => {
  return (
    <>
      <HeroBanner
        header="Shop the latest fits."
        subtext="Curated streetwear and essentials for every day life."
        anchorText="Browse Apparel"
        href="/browse"
        videoURL={"https://cdn.pixabay.com/video/2024/04/29/209895_large.mp4"}
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
