import { ProductContainer } from "./ProductContainer";

/**
 * RelatedProducts Component
 *
 * Displays a list of products that are similar to the currently viewed product.
 * Similarity is determined by a combination of gender, category, and price range.
 * If no closely related products are found, a default set of products is shown.
 *
 * @param {Object} props
 * @param {Object} props.product - The current product being viewed.
 * @param {Array<Object>} props.products - The full list of available products.
 * @param {boolean} props.loading - Whether the product list is still loading.
 * @param {Object|null} props.error - Error object if product fetching failed.
 */
export const RelatedProducts = ({ product, products, loading, error }) => {
  const PRICE_RANGE = 100;

  let related = products.filter((p) => {
    if (p.id === product.id) {
      return false; // filter out the current product.
    }

    const gender = p.gender === product.gender;
    const category = p.category === product.category;
    const range = Math.abs(p.price - product.price) <= PRICE_RANGE;

    return gender && category && range;
  });

  if (related.length === 0) {
    related = products.slice(0, 14); // default same as home view
  }

  return (
    <ProductContainer
      products={related.slice(0, 12)} // show the first 12 matching
      error={error}
      loading={loading}
      itemsPerPage={4}
      containerTitle={"Related Products"}
    />
  );
};
