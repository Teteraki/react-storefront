import { SingleProductContainer } from "../components/products/SingleProductContainer";
import { RelatedProducts } from "../components/products/RelatedProducts";
import { useParams } from "react-router-dom";

/**
 * SingleProduct Page Component
 *
 * Displays a full product detail page along with related product suggestions.
 * Retrieves the product ID from the URL and locates the corresponding product
 * in the provided product dataset.
 *
 * @param {Object} props
 * @param {Array<Object>} props.products - Full product catalog used to locate
 *   the selected product and generate related product recommendations.
 * @param {boolean} props.loading - Indicates whether product data is being fetched.
 * @param {Object|null} props.error - Error object if data fetching fails.
 *
 * Router Params:
 * - id: The product's unique identifier, extracted from the route via useParams().
 */

export const SingleProduct = ({ products, loading, error }) => {
  const { id } = useParams();

  const singleProduct = products.find((p) => p.id === id);

  if (!singleProduct) {
    return <div>No product found.</div>;
  }

  return (
    <>
      <SingleProductContainer product={singleProduct} />

      <RelatedProducts
        product={singleProduct}
        products={products}
        loading={loading}
        error={error}
      />
    </>
  );
};
