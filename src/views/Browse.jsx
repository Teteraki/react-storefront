import { useParams } from "react-router-dom";
import { BrowseContainer } from "../components/browse/BrowseContainer";

/**
 * Browse Page Component
 *
 * Page-level container for the product browsing experience. Reads URL parameters
 * (gender and category) from React Router and passes them into the
 * BrowseContainer, which handles filtering, sorting, and display logic.
 *
 * @param {Object} props
 * @param {Array<Object>} props.products - List of all products available for browsing.
 * @param {boolean} props.loading - Indicates whether product data is still being fetched.
 * @param {Object|null} props.error - Error object if fetching products failed.
 *
 * Router Params:
 * - gender: Optional gender segment (e.g., "Mens", "Womens") from the URL.
 * - category: Optional category segment (e.g., "Hoodies", "Shoes").
 */

export const Browse = ({ products, loading, error }) => {
  const { gender, category } = useParams();

  return (
    // I can add future components here if I wanted to change the page up a bit.
    <BrowseContainer
      products={products}
      loading={loading}
      error={error}
      gender={gender}
      category={category}
    />
  );
};
